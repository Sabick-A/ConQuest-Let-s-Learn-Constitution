var padding = {top:20, right:40, bottom:0, left:0},
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top  - padding.bottom,
    r = Math.min(w, h)/2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();

// Updated data with Constitution articles
var data = [
    {"label":"Article 1",  "value":1,  "description":"India is a Union of States.", "fact":"India is a federal country with a unitary bias."},
    {"label":"Article 2",  "value":2,  "description":"New States can be added.", "fact":"Parliament can admit new states."},
    {"label":"Article 3",  "value":3,  "description":"Formation and alteration of States.", "fact":"Allows reorganization of states."},
    {"label":"Article 12", "value":12, "description":"Defines 'State' for Fundamental Rights.", "fact":"Important for interpreting Fundamental Rights."},
    {"label":"Article 13", "value":13, "description":"Invalidates laws contradicting Fundamental Rights.", "fact":"Any law violating these rights is void."},
    {"label":"Article 21", "value":21, "description":"Protection of life and liberty.", "fact":"Ensures personal freedom and safety."},
    {"label":"Article 32", "value":32, "description":"Enforcement of Fundamental Rights.", "fact":"Allows petitions to the Supreme Court."},
    {"label":"Article 51A", "value":51, "description":"Fundamental duties of citizens.", "fact":"Lists essential duties for citizens."},
    {"label":"Article 44", "value":44, "description":"Uniform civil code.", "fact":"Aims for a common set of laws for all."},
    {"label":"Article 123", "value":123, "description":"President’s power to dissolve Lok Sabha.", "fact":"The President can dissolve the lower house."},
    {"label":"Article 15", "value":15, "description":"Prohibits discrimination.", "fact":"Forbids discrimination on grounds of religion, race, etc."},
    {"label":"Article 19", "value":19, "description":"Freedom of speech and expression.", "fact":"Guarantees various freedoms like speech and assembly."},
    {"label":"Article 45", "value":45, "description":"Free and compulsory education for children.", "fact":"Mandates education for children up to 14 years."},
    {"label":"Article 48", "value":48, "description":"Organisation of agriculture and animal husbandry.", "fact":"Promotes modern agricultural practices."},
    {"label":"Article 49", "value":49, "description":"Protection of monuments and places of national importance.", "fact":"Ensures preservation of national heritage."},
    {"label":"Article 50", "value":50, "description":"Separation of judiciary from executive.", "fact":"Aims for independent judicial administration."},
    {"label":"Article 51", "value":51, "description":"Promotion of international peace and security.", "fact":"Encourages India's role in global peace efforts."},
    {"label":"Article 86", "value":86, "description":"Powers of the President to address both Houses.", "fact":"The President can address the Parliament jointly."},
    {"label":"Article 112", "value":112, "description":"Annual Financial Statement.", "fact":"The government presents the budget in Parliament."},
    {"label":"Article 226", "value":226, "description":"Power of High Courts to issue writs.", "fact":"High Courts can issue writs for enforcing rights."}
];


var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

var vis = container.append("g");

var pie = d3.layout.pie().sort(null).value(function(d){ return 1; });
var arc = d3.svg.arc().outerRadius(r);
var arcs = vis.selectAll("g.slice")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function(d, i){ return color(i); })
    .attr("d", function (d) { return arc(d); });

arcs.append("text")
    .attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle)/2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
    })
    .attr("text-anchor", "end")
    .text(function(d, i) {
        return data[i].label;
    });

container.on("click", spin);

function spin(d){
    container.on("click", null);
    if(oldpick.length === data.length){
        console.log("All articles have been shown.");
        container.on("click", null);
        return;
    }
    var ps = 360/data.length,
        pieslice = Math.round(1440/data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);
    picked = Math.round(data.length - (rotation % 360)/ps);
    picked = picked >= data.length ? (picked % data.length) : picked;

    if(oldpick.indexOf(picked) !== -1){
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps/2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function(){
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");

            d3.select("#question h1")
                .text(data[picked].description + " Fun Fact: " + data[picked].fact);

            oldrotation = rotation;

            console.log("Selected article:", data[picked].value);

            container.on("click", spin);
        });
}

function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
        return "rotate(" + i(t) + ")";
    };
}

svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * 0.15) + ",0L0," + (r * 0.05) + "L0,-" + (r * 0.05) + "Z")
    .style({"fill":"black"});

container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({"fill":"white","cursor":"pointer"});

container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({"font-weight":"bold", "font-size":"30px"});
