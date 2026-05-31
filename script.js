<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>F.O.R.N.I.X</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#0d1117;
    color:#e6edf3;
}

/* TOP BAR */

.topbar{
    height:60px;
    background:#161b22;
    border-bottom:1px solid #30363d;
    display:flex;
    align-items:center;
    padding:0 20px;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo{
    font-size:30px;
    margin-right:12px;
    color:#f6f6f6
}

.title{
    font-size:28px;
    font-weight:bold;
    letter-spacing:3px;
    color:white;
}

.search-container{
    margin-left:auto;
    display:flex;
    gap:10px;
}

.search-container input{
    width:250px;
    padding:8px;
    background:#0d1117;
    border:1px solid #30363d;
    color:white;
    border-radius:4px;
}

.search-container button{
    padding:8px 14px;
    background:#b487de;
    border:none;
    color:white;
    border-radius:4px;
    cursor:pointer;
}

.search-container button:hover{
    background:#8359ab;
}

/* LAYOUT */

.container{
    display:flex;
    min-height:100vh;
}

/* SIDEBAR */

.sidebar{
    width:240px;
    background:#161b22;
    border-right:1px solid #30363d;
    padding:20px;
}

.sidebar h3{
    margin-top:20px;
    margin-bottom:10px;
    color:#a6b1bd;
    font-size:14px;
    border-bottom:1px solid #30363d;
    padding-bottom:5px;
}

.sidebar a{
    display:block;
    color:#b267eb;
    text-decoration:none;
    margin:10px 0;
    font-size:15px;
}

.sidebar a:hover{
    text-decoration:underline;
}

/* MAIN CONTENT */

.content{
    flex:1;
    padding:40px;
}

.article{
    display:none;
}

.article.active{
    display:block;
}

.article-title{
    font-size:40px;
    margin-bottom:10px;
    border-bottom:1px solid #30363d;
    padding-bottom:10px;
}

.subtitle{
    color:#8b949e;
    margin-bottom:25px;
}

/* INFOBOX */

.infobox{
    float:right;
    width:280px;
    background:#161b22;
    border:1px solid #30363d;
    margin-left:25px;
    margin-bottom:20px;
}

.infobox-header{
    background:#21262d;
    padding:12px;
    text-align:center;
    font-weight:bold;
}

.infobox-image{
    height:180px;
    background:#30363d;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#8b949e;
}

.infobox table{
    width:100%;
    border-collapse:collapse;
}

.infobox td{
    border-top:1px solid #30363d;
    padding:10px;
}

/* SECTIONS */

.section{
    margin-top:40px;
}

.section h2{
    font-size:28px;
    margin-bottom:15px;
    border-bottom:1px solid #30363d;
    padding-bottom:8px;
}

.section p{
    line-height:1.8;
    margin-bottom:16px;
}

/* LINKS INSIDE ARTICLES */

.article a{
    color:#b267eb;
    text-decoration:none;
}

.article a:hover{
    text-decoration:underline;
}

/* FOOTER */

footer{
    margin-top:60px;
    padding-top:20px;
    border-top:1px solid #30363d;
    color:#8b949e;
    font-size:13px;
}

/* MOBILE */

@media(max-width:900px){

    .sidebar{
        display:none;
    }

    .content{
        padding:20px;
    }

    .infobox{
        float:none;
        width:100%;
        margin-left:0;
    }

    .search-container input{
        width:140px;
    }

}

</style>
</head>

<body>

<!-- TOP BAR -->

<div class="topbar">
    
    <a href="#" class="logo-link" onclick="showArticle('home')">
    <span class="logo">⟁</span>
</a>
</a>

    <div class="title">
        <strong>F.O.R.N.I.X</strong>
    </div>

    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search F.O.R.N.I.X">
        <button onclick="searchArticle()">Search</button>
    </div>

</div>

<div class="container">

<!-- SIDEBAR -->

<aside class="sidebar">

    <h3>Navigation</h3>

    <a href="#" onclick="showArticle('home')">Main Page</a>
    <a href="#" onclick="showArticle('archives')">Archives</a>
    <a href="#" onclick="showArticle('magitek')">Magitek</a>
    <a href="#" onclick="showArticle('entities')">Entities</a>
    <a href="#" onclick="showArticle('character')">Character Profile</a>

    <h3>Research</h3>

    <a href="#" onclick="showArticle('containment')">Containment</a>
    <a href="#" onclick="showArticle('experiments')">Experiments</a>
    <a href="#" onclick="showArticle('history')">History</a>

    <h3>System</h3>

    <a href="#" onclick="toggleTheme()">Toggle Theme</a>

</aside>

<!-- CONTENT -->

<main class="content">

<!-- HOME -->

<section id="home" class="article active">

    <div class="article-title">Welcome to F.O.R.N.I.X</div>

    <div class="subtitle">
        Classified Information Network
    </div>

    <div class="infobox">

        <div class="infobox-header">
            System Overview
        </div>

        <div class="infobox-image">
            F.O.R.N.I.X DATABASE
        </div>

        <table>
            <tr>
                <td><strong>Status</strong></td>
                <td>Online</td>
            </tr>

            <tr>
                <td><strong>Clearance</strong></td>
                <td>Restricted</td>
            </tr>

            <tr>
                <td><strong>Version</strong></td>
                <td>2.6</td>
            </tr>
        </table>

    </div>

    <p>
        Welcome to the F.O.R.N.I.X archival system.
        This database contains interconnected research files,
        experimental logs, anomalous records, and classified technology.
    </p>

    <div class="section">

        <h2>Featured Pages</h2>

        <p>
            Visit the <a href="#" onclick="showArticle('entities')">Entities Database</a>
            or browse the
           <a href="#" onclick="showArticle('magitek')">Magitek Division</a>
        </p>

    </div>

</section>

<!-- TECHNOLOGY -->

<section id="magitek" class="article">

    <div class="article-title">Magitek Division</div>

    <div class="subtitle">
        Arcane-Mechanical Systems and Devices
    </div>

    <div class="section">

        <h2>Overview</h2>

        <p>
            The Technology Division develops advanced containment systems,
            energy platforms, and neural interfaces.
        </p>

    </div>

    <div class="section">

        <h2>Connected Files</h2>

        <p>
            Refer to:
            <a href="#" onclick="showArticle('experiments')">Experiment Logs</a>
            and
            <a href="#" onclick="showArticle('containment')">Containment Protocols</a>.
        </p>

    </div>

</section>

<!-- ENTITIES -->

<section id="entities" class="article">

    <div class="article-title">Entities Database</div>

    <div class="subtitle">
        Catalogued Biological and Anomalous Organisms
    </div>

    <div class="section">

        <h2>Current Status</h2>

        <p>
            217 active biological entities remain under observation.
        </p>

    </div>

    <div class="section">

        <h2>Cross References</h2>

        <p>
            See also:
            <a href="#" onclick="showArticle('history')">Historical Incidents</a>.
            <a href="#" onclick="showArticle('character')">Character Profile</a>,
            
            
        </p>
        
        
        <p>
          A: </p>
            <p> <a href="#" onclick="showArticle('Amber')">Amber Moon</a> </p>
        <p>  B: </p>
         <p>  E:  </p>
         <p>  <a href="#" onclick="showArticle('Ephraim')">Ephraïm</a>  </p>
          <p>  F:  </p>
        
         <p> <a href="#" onclick="showArticle('Flynn')">Flynn</a> </p>
         <p> M: </p>
         <p> <a href="#" onclick="showArticle('Malrik Voskin')">Malrik Voskin</a>
           <p> <a href="#" onclick="showArticle('Journal')">Journal</a>
        </p>

    </div>

</section>

<section id="character" class="article">

    <div class="article-title">Character Name</div>

    <div class="subtitle">
        Classified Profile Entry
    </div>

    <!-- INFOBOX -->
    <div class="infobox">

        <div class="infobox-header">
            Character Data
        </div>

        <div class="infobox-image">
            <img src="your-image.png" style="width:100%; height:100%; object-fit:cover;">
        </div>

        <table>
            <tr>
                <td><strong>Age</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Gender</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Height</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Species</strong></td>
                <td>???</td>
            </tr>
        </table>

    </div>

    <div class="section">
        <h2>Appearance</h2>
        <p>
            Describe the character’s physical traits here—hair, eyes, clothing, markings, etc.
        </p>
    </div>

    <div class="section">
        <h2>Abilities</h2>
        <p>
            List powers, skills, or special traits here.
        </p>
        <tr>
    <td><strong>Abilities</strong></td>
    <td>Fire manipulation, regeneration, etc.</td>
</tr>
    </div>

    <div class="section">
        <h2>Background</h2>
        <p>
            Character lore, history, origin, etc.
        </p>
    </div>

</section>
<!---ITEMS--->
<!---Journal--->
<section id="Journal" class="article">
  <div id="journal-container" class="hidden">
    
    <!-- GOOGLE FONT (SCOPED USAGE ONLY) -->
<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">

<style>
/* =========================
   JOURNAL MODULE CONTAINER
   (THIS IS WHAT FIXES YOUR FONT ISSUE)
========================= */

#field-journal-module{
    all: initial;
    position: relative;
    display: block;
    font-family: 'Homemade Apple', cursive;
}

/* =========================
   GLOBAL JOURNAL WRAPPER
========================= */

#field-journal{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
}

/* =========================
   SEARCH GATE
========================= */

#fj-gate{
    position:absolute;
    top:40%;
    text-align:center;
    font-family:inherit;
}

#fj-gate input{
    padding:12px;
    width:280px;
    border-radius:8px;
    border:none;
    outline:none;
}

#fj-gate button{
    margin-top:10px;
    padding:10px 18px;
    background:#3b2a22;
    color:white;
    border:none;
    border-radius:6px;
    cursor:pointer;
}

/* =========================
   BOOK
========================= */

#fj-book{
    display:none;
    width:1000px;
    height:650px;
    perspective:2500px;
    position:relative;
}

/* =========================
   PAGES
========================= */

.fj-page{
    position:absolute;
    width:50%;
    height:100%;
    right:0;
    transform-origin:left;
    transform-style:preserve-3d;
    transition: transform 1s cubic-bezier(.2,.8,.2,1);
}

/* REALISTIC CURL LAYER */
.fj-page::after{
    content:"";
    position:absolute;
    right:0;
    top:0;
    width:40px;
    height:100%;
    background:linear-gradient(to left, rgba(0,0,0,0.15), transparent);
    transform: skewY(-2deg);
    pointer-events:none;
}

/* FLIP STATE */
.fj-flipped{
    transform: rotateY(-180deg) translateX(-2px);
}

/* LEFT SIDE */
.fj-page.left{
    left:0;
    right:auto;
}

/* =========================
   PAPER TEXTURE
========================= */

.fj-front, .fj-back{
    position:absolute;
    width:100%;
    height:100%;
    backface-visibility:hidden;

    background:
        radial-gradient(circle at 30% 20%, rgba(0,0,0,0.06), transparent 40%),
        repeating-linear-gradient(
            transparent,
            transparent 28px,
            rgba(0,0,0,0.08) 29px
        ),
        #f4ead8;

    padding:25px;
    box-sizing:border-box;
    color:#2a1f18;
}

/* BACK SIDE */
.fj-back{
    transform: rotateY(180deg);
}

/* =========================
   CONTENT BOXES
========================= */

.fj-header{
    font-size:20px;
    border-bottom:1px solid rgba(0,0,0,0.2);
    margin-bottom:10px;
    text-align:center;
}

.fj-image{
    height:180px;
    border:2px dashed rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:12px;
    font-size:13px;
    opacity:0.6;
}

.fj-text{
    font-size:15px;
    line-height:1.7;
}

.fj-page-number{
    position:absolute;
    bottom:12px;
    left:50%;
    transform:translateX(-50%);
    font-size:12px;
    opacity:0.6;
}

/* =========================
   NAV BUTTONS
========================= */

.fj-nav{
    position:absolute;
    bottom:20px;
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:0 25px;
}

.fj-nav button{
    background:#3b2a22;
    color:white;
    border:none;
    padding:12px;
    border-radius:50%;
    cursor:pointer;
    transition:0.2s;
}

.fj-nav button:hover{
    transform:scale(1.1);
}
</style>

<!-- =========================
     MODULE WRAPPER
========================= -->

<div id="field-journal-module">

    <!-- SEARCH GATE -->
    <div id="fj-gate">
        <h2 style="color:#d6c2a8;">Field Archive Access</h2>
        <input id="fj-search" placeholder="Enter clearance keyword...">
        <br>
        <button onclick="fjUnlock()">Search</button>
    </div>

    <!-- SOUND -->
    <audio id="fj-sound" src="https://www.soundjay.com/misc/sounds/page-turn-1.mp3"></audio>

    <!-- BOOK -->
    <div id="fj-book">

        <!-- PAGE TEMPLATE 1 -->
        <div class="fj-page" id="fj-p1">
            <div class="fj-front">
                <div class="fj-header">Entry #01 — Forest Edge Study</div>
                <div class="fj-image">Pressed Leaf Sample</div>
                <div class="fj-text">Notes on soil saturation and root behavior near boundary tree lines.</div>
                <div class="fj-page-number">1</div>
            </div>
            <div class="fj-back">
                <div class="fj-header">Continuation</div>
                <div class="fj-image">Field Sketch</div>
                <div class="fj-text">Fungal networks appear unusually dense beneath decaying bark layers.</div>
                <div class="fj-page-number">2</div>
            </div>
        </div>

        <!-- PAGE TEMPLATE 2 -->
        <div class="fj-page" id="fj-p2">
            <div class="fj-front">
                <div class="fj-header">Entry #02 — River Specimens</div>
                <div class="fj-image">Aquatic Diagram</div>
                <div class="fj-text">Flow variance suggests subterranean branching channels.</div>
                <div class="fj-page-number">3</div>
            </div>
            <div class="fj-back">
                <div class="fj-header">Hydrology Notes</div>
                <div class="fj-image">Water Sample</div>
                <div class="fj-text">Mineral concentration increases downstream beyond marker stone.</div>
                <div class="fj-page-number">4</div>
            </div>
        </div>
        
                <!-- PAGE TEMPLATE 3 -->
        <div class="fj-page" id="fj-p3">
            <div class="fj-front">
                <div class="fj-header">Entry #03 — New Friends</div>
                <div class="fj-image">Aquatic Diagram</div>
                <div class="fj-text">Flow variance suggests subterranean branching channels.</div>
                <div class="fj-page-number">4</div>
            </div>
            <div class="fj-back">
                <div class="fj-header">Entry #04</div>
                <div class="fj-image">Water Sample</div>
                <div class="fj-text">Mineral concentration increases downstream beyond marker stone.</div>
                <div class="fj-page-number">5</div>
            </div>
        </div>

        <!-- NAV -->
        <div class="fj-nav">
            <button onclick="fjPrev()">◀</button>
            <button onclick="fjNext()">▶</button>
        </div>

    </div>
</div>

<script>
let fjCurrent = 0;
const fjPages = document.querySelectorAll(".fj-page");
const fjSound = document.getElementById("fj-sound");

function fjUnlock(){
    const val = document.getElementById("fj-search").value.toLowerCase();

    if(val.includes("sun") || val.includes("flower") || val.includes("sunflower")){
        document.getElementById("fj-gate").style.display = "none";
        document.getElementById("fj-book").style.display = "block";
    } else {
        alert("Access Denied");
    }
}

function fjPlay(){
    fjSound.currentTime = 0;
    fjSound.play();
}

function fjUpdate(){
    fjPages.forEach((p,i)=>{
        if(i <= fjCurrent){
            p.classList.add("fj-flipped");
        } else {
            p.classList.remove("fj-flipped");
        }
    });
}

function fjNext(){
    if(fjCurrent < fjPages.length){
        fjCurrent++;
        fjPlay();
        fjUpdate();
    }
}

function fjPrev(){
    if(fjCurrent > 0){
        fjCurrent--;
        fjPlay();
        fjUpdate();
    }
}

fjUpdate();
</script>
    
  </div>
</section>
<!-- PROFILES---------------------------------------------------------- -->
<!--Amber-->
<section id="Amber" class="article">


<div class="article-title">Amber Moon</div>

<div class="subtitle">
    Air Fein Healer • "Zephandrel's Last Hope"
</div>

<div class="infobox">

    <div class="infobox-header">
        Character Data
    </div>

    <div class="infobox-image">
        Image Placeholder
    </div>

    <table>

        <tr>
            <td><strong>Name</strong></td>
            <td>Amber Moon</td>
        </tr>

        <tr>
            <td><strong>Alias</strong></td>
            <td>Zephandrel's Last Hope</td>
        </tr>

        <tr>
            <td><strong>Gender</strong></td>
            <td>Female</td>
        </tr>

        <tr>
            <td><strong>Pronouns</strong></td>
            <td>She / Her</td>
        </tr>

        <tr>
            <td><strong>Birthday</strong></td>
            <td>June 28</td>
        </tr>

        <tr>
            <td><strong>Age</strong></td>
            <td>Appears 25 • Recorded Age: 4,983+</td>
        </tr>

        <tr>
            <td><strong>Sexuality</strong></td>
            <td>Pansexual • Demiromantic</td>
        </tr>

        <tr>
            <td><strong>Species</strong></td>
            <td>Air Fein</td>
        </tr>

        <tr>
            <td><strong>Clan</strong></td>
            <td>Solaris</td>
        </tr>

        <tr>
            <td><strong>Role</strong></td>
            <td>Healer</td>
        </tr>

    </table>

</div>

<div class="section">

    <h2>Overview</h2>

    <p>
        "Genuine care plants seeds of hope and heals fractured spirits."
    </p>

    <p>
        Amber Moon is a wandering Air Fein healer known for her kindness,
        nurturing nature, and unusual connection to spirits. Despite her
        cheerful disposition and endless compassion, she possesses a
        fragmented past and memories that remain clouded in mystery.
    </p>

</div>

<div class="section">

    <h2>Appearance</h2>

    <p>
        Amber is abnormally tall for a female Fein, standing between
        5'10" and 5'11". She possesses a lean, lithe frame often described
        as elegant or almost elvish in appearance.
    </p>

    <p>
        She has mousey brown to honey-gold hair that falls roughly to the
        middle of her neck. Her eyes are ocean blue and occasionally shift
        in appearance depending on the time and conditions around her.
    </p>

    <p>
        Amber's skin is peach-toned with a natural tan complexion.
        Feinic markings resembling wisps spread across her torso and branch
        into patterns resembling dragonfly wings across her back.
    </p>

    <p>
        Her clothing usually consists of jeans and a sleeveless cropped top,
        often leather. She frequently wears a single arm warmer, a silver
        bangle, and occasionally a lace-and-pearl choker necklace.
    </p>

</div>

<div class="section">

    <h2>Personality</h2>

    <p>
        Amber is caring, helpful, nurturing, imaginative, impulsive,
        adventurous, and deeply loving.
    </p>

    <p>
        Unlike many Fein who focus primarily on survival, Amber forms deep
        attachments and genuinely loves people, animals, and life itself.
        She often finds herself caring for children, tending to the sick,
        and helping strangers without expecting anything in return.
    </p>

    <p>
        She is naturally restless and dislikes staying in one place for
        long. Her free-spirited nature often leads her into adventures,
        unusual situations, and occasional chaos.
    </p>

    <p>
        Despite her warm personality, she can be surprisingly feral when
        needed and will not hesitate to stand her ground or protect those
        she cares about.
    </p>

    <p>
        A notable trait is her tendency to casually converse with spirits.
        Her clairvoyance far exceeds that of most Air Fein occultists,
        allowing her to perceive, communicate with, and comfort souls that
        remain unsettled.
    </p>

</div>

<div class="section">

    <h2>Likes</h2>

    <ul>
        <li>Sweets</li>
        <li>Plants and gardening</li>
        <li>Animals</li>
        <li>Humans and human cultures</li>
        <li>Fruit</li>
        <li>Food in general</li>
        <li>Painting and sketching</li>
        <li>Reading</li>
        <li>Journaling</li>
        <li>Collecting shells, feathers, rocks, and sea glass</li>
        <li>Nature and hiking</li>
    </ul>

</div>

<div class="section">

    <h2>Dislikes</h2>

    <ul>
        <li>Bitter foods</li>
        <li>Spiders being too close to her</li>
        <li>Dirt inside her home</li>
        <li>The Underdark and Noxus</li>
        <li>Dark environments that may corrupt her core</li>
    </ul>

</div>

<div class="section">

    <h2>Abilities</h2>

    <h3>Wind Blade</h3>

    <p>
        Amber uses her speed and agility to generate cutting currents of
        wind capable of slicing skin, flesh, and even bone when properly
        aimed.
    </p>

    <h3>Air Explosion</h3>

    <p>
        Compresses a massive column of air before releasing it in a violent
        burst that throws targets apart with tremendous force.
    </p>

    <h3>Shield Gale</h3>

    <p>
        Creates a shield composed of layered wind currents. The barrier can
        protect herself or be projected onto an ally. The shield may also
        regulate temperature, warming or cooling the protected individual.
    </p>

</div>

<div class="section">

    <h2>Passive Abilities</h2>

    <h3>Quick Feet</h3>

    <p>
        Amber moves significantly faster than the average Fein and can
        perform short bursts of acceleration that make tracking her
        movements difficult.
    </p>

    <h3>Twisting Skies</h3>

    <p>
        Her body moves naturally with the flow of physical attacks,
        allowing her to avoid many close-range strikes through instinctive
        movement and agility.
    </p>

</div>

<div class="section">

    <h2>Skills</h2>

    <ul>

        <li><strong>Hand-to-Hand Combat</strong> — A fast, agile fighting
        style emphasizing movement and speed.</li>

        <li><strong>Archery</strong> — Competent with a hunter's bow and
        capable of defending herself at range.</li>

        <li><strong>Healing</strong> — Amber's signature skill. Her healing
        magic manifests as pink particles and a warm sensation that repairs
        injuries from within. She can restore severe wounds and alleviate
        long-term pain, though powerful healing requires recovery time.</li>

    </ul>

</div>

<div class="section">

    <h2>Equipment</h2>

    <ul>

        <li>Hunter's Bow (self-made)</li>

        <li>10 Poultices</li>

        <li>30 Healing Potions</li>

    </ul>

</div>

<div class="section">

    <h2>History</h2>

    <p>
        Like many Fein, Amber was born from a stone. However, she always
        felt incomplete, as though something important was missing from her
        existence.
    </p>

    <p>
        Throughout her life she displayed an unusual sense of purpose and
        divinity. While other Air Fein possessed grace and agility, Amber
        carried herself with a warmth and spiritual presence that set her
        apart.
    </p>

    <p>
        She spent centuries helping wherever she could: tending greenhouses,
        working in nurseries, healing soldiers, caring for animals, and
        assisting clinics throughout the capital.
    </p>

    <p>
        Eventually the call of adventure became impossible to ignore.
        Leaving behind her position as a respected healer, Amber chose to
        follow the wind and discover whatever awaited her beyond the places
        she had always known.
    </p>

</div>

<div class="section">

    <h2>Family</h2>

    <table>

        <tr>
            <td><strong>Father</strong></td>
            <td>Jason Moon</td>
        </tr>

        <tr>
            <td><strong>Mother</strong></td>
            <td>Dorothy Moon</td>
        </tr>

        <tr>
            <td><strong>Siblings</strong></td>
            <td>None Recorded</td>
        </tr>

    </table>

</div>

<div class="section">

    <h2>Relationships</h2>

    <table>

        <tr>
            <td><strong>Isla Olympia</strong></td>
            <td>Best Friend</td>
        </tr>

        <tr>
            <td><strong>Ephraim de Vries</strong></td>
            <td>Lover</td>
        </tr>

        <tr>
            <td><strong>Malrik Voskin</strong></td>
            <td>Friend</td>
        </tr>

    </table>

</div>

<div class="section">

    <h2>Trivia</h2>

    <p>
        Amber is unknowingly an offshoot of Ophelia's soul. Following
        Ophelia's fall, a fragment of divine essence separated and landed
        within Zephandrel, eventually manifesting as Amber.
    </p>

    <p>
        She embodies much of Ophelia's compassion, kindness, and desire to
        heal, yet possesses none of Ophelia's memories.
    </p>

    <p>
        Although mentally burdened by forgotten memories and unresolved
        emotions, she hides her struggles exceptionally well behind warmth,
        optimism, and genuine affection for others.
    </p>

</div>


</section>


<!---Ephraim--->
<section id="Ephraim" class="article">

    <div class="article-title">Ephraim Ad de Vries</div>

    <div class="subtitle">
        Asharoth-Pyrrian Kinetic Specialist
    </div>

    <!-- INFOBOX -->

    <div class="infobox">

        <div class="infobox-header">
            Character Data
        </div>

        <div class="infobox-image">
            Image Placeholder
        </div>

        <table>

            <tr>
                <td><strong>Alignment</strong></td>
                <td>Neutral</td>
            </tr>

            <tr>
                <td><strong>Age</strong></td>
                <td>5,822</td>
            </tr>

            <tr>
                <td><strong>Species</strong></td>
                <td>Fein ⇝ Asharoth-Pyrrian</td>
            </tr>

            <tr>
                <td><strong>Race</strong></td>
                <td>Rahzmir</td>
            </tr>

            <tr>
                <td><strong>Gender</strong></td>
                <td>Male</td>
            </tr>

            <tr>
                <td><strong>Origin</strong></td>
                <td>Malakar, Eldora</td>
            </tr>

            <tr>
                <td><strong>Residence</strong></td>
                <td>Orysa, Kingdom of Calliopy</td>
            </tr>

            <tr>
                <td><strong>Affiliation</strong></td>
                <td>Unaligned</td>
            </tr>

            <tr>
                <td><strong>Weight</strong></td>
                <td>265 lbs</td>
            </tr>

            <tr>
                <td><strong>Build</strong></td>
                <td>Endomorph</td>
            </tr>

        </table>

    </div>

    <!-- APPEARANCE -->

    <div class="section">

        <h2>Appearance</h2>

        <p>
            Ephraim possesses olive-tan skin, white hair styled with a center
            part and low taper fade, and carnation-pink eyes flecked with
            brighter tones that may glow depending on kinetic energy intake.
        </p>

        <p>
            His facial structure is angular with a strong jawline, high
            cheekbones, a roman nose, and a fixed forward stare. He bears a
            vertical scar over his left eye and a diagonal scar extending from
            his lower right jaw to his right eye. Subtle pointed ears and
            Asharoth markings betray his mixed heritage.
        </p>

    </div>

    <!-- PERSONALITY -->

    <div class="section">

        <h2>Personality</h2>

        <p>
            Ephraim is stoic, controlled, opinionated, and notably nonchalant.
            He rarely reacts emotionally and is difficult to provoke. Dry humor,
            understated remarks, and emotional distance serve as his preferred
            coping mechanisms.
        </p>

        <p>
            He values accountability, personal choice, restraint, and consent.
            He judges actions by outcomes rather than intentions or ideology and
            has little patience for moral grandstanding.
        </p>

        <p>
            Despite his independence, he desires genuine stability, meaningful
            connections, and a family built through mutual choice rather than
            obligation.
        </p>

    </div>

    <!-- PASSIVES -->

    <div class="section">

        <h2>Passive Traits</h2>

        <ul>

            <li>Kinetic Intake</li>
            <li>Inertia Anchoring</li>
            <li>Structural Reinforcement</li>
            <li>Enhanced Respiratory Capacity</li>
            <li>Thermal Tolerance</li>
            <li>Thermal Conversion</li>
            <li>Asharoth Rune Network</li>
            <li>Momentum Sight</li>
            <li>Perfect Efficiency</li>

        </ul>

        <p>
            His physiology continuously absorbs low-level kinetic energy while
            reinforcing his body against impact, heat, pressure changes, and
            momentum-based disruption.
        </p>

    </div>

    <!-- PRIMARY ABILITY -->

    <div class="section">

        <h2>Primary Ability — Kinetic Ascension</h2>

        <p>
            Kinetic Ascension is the evolved state of Ephraim's Asharoth core.
            Motion is no longer merely absorbed and redirected; it is generated,
            maintained, and amplified internally.
        </p>

        <p>
            Every breath, movement, muscle contraction, and shift in balance
            contributes to a continuously cycling kinetic field. Stored motion
            can be folded, compressed, and layered to dramatically increase
            physical output.
        </p>

        <h3>Techniques</h3>

        <ul>

            <li>Inertia</li>
            <li>Torque & Rotational Kinetics</li>
            <li>Concussive Impact & Pressure Release</li>
            <li>Vector Sovereignty</li>

        </ul>

        <h3>Weaknesses</h3>

        <ul>

            <li>Requires motion to sustain peak performance.</li>
            <li>Suppression fields reduce effectiveness.</li>
            <li>Excessive internal pressure requires venting.</li>
            <li>Overstacked vectors risk collateral damage.</li>

        </ul>

    </div>

    <!-- SECONDARY ABILITY -->

    <div class="section">

        <h2>Secondary Ability — Kinetic Imprinting</h2>

        <p>
            Ephraim can carve kinetic runes onto objects, transforming them into
            temporary vessels for stored motion. Imprinted items retain
            directional force, rotational energy, inertia, or explosive kinetic
            discharge.
        </p>

        <p>
            Applications range from combat projectiles to infrastructure
            reinforcement, construction, traversal, climbing assistance,
            transportation, rescue operations, and labor.
        </p>

        <h3>Limitations</h3>

        <ul>

            <li>Requires direct contact.</li>
            <li>Objects possess finite durability.</li>
            <li>Cannot stockpile multiple charges.</li>
            <li>Cannot directly imprint living bodies.</li>

        </ul>

    </div>

    <!-- DERIVED ENERGIES -->

    <div class="section">

        <h2>Derived Energies</h2>

        <ul>

            <li>Potential Energy Storage</li>
            <li>Radiant Energy Emission</li>
            <li>Sound & Vibration Manipulation (Training)</li>
            <li>Magnetic Interaction Effects</li>
            <li>Kinetic Constructs</li>

        </ul>

        <p>
            Through advanced manipulation of motion, Ephraim can convert
            kinetic energy into secondary phenomena such as stored tension,
            visible light, vibration control, localized magnetic effects,
            and temporary kinetic structures.
        </p>

    </div>

    <!-- COMBAT -->

    <div class="section">

        <h2>Combat Style</h2>

        <p>
            Close Quarters Combat.
        </p>

        <p>
            Ephraim specializes in overwhelming force application, momentum
            control, pressure management, and kinetic redirection. His fighting
            style appears deceptively relaxed until explosive bursts of motion
            are unleashed.
        </p>

    </div>

    <!-- HISTORY -->

    <div class="section">

        <h2>Background</h2>

        <p>
            Information pending archival submission.
        </p>

    </div>

    <!-- CONNECTIONS -->

    <div class="section">

        <h2>Known Connections</h2>

        <table>

            <tr>
                <td><strong>Juno Olympia</strong></td>
                <td>Ex-Wife</td>
            </tr>

            <tr>
                <td><strong>Amber Moon</strong></td>
                <td>Girlfriend</td>
            </tr>

            <tr>
                <td><strong>Sophia Sertho</strong></td>
                <td>Daughter</td>
            </tr>

            <tr>
                <td><strong>Django Drak'yo</strong></td>
                <td>"Johnny"</td>
            </tr>

            <tr>
                <td><strong>Isla</strong></td>
                <td>Associate</td>
            </tr>

            <tr>
                <td><strong>Sigfrid</strong></td>
                <td>Mentor</td>
            </tr>

            <tr>
                <td><strong>Penny</strong></td>
                <td>Companion</td>
            </tr>

            <tr>
                <td><strong>Henry</strong></td>
                <td>"Ikarus"</td>
            </tr>

        </table>

    </div>

</section>
<!-- FLYNN-->
<section id="Flynn" class="article">

    <div class="article-title">Flynn Decra</div>

    <div class="subtitle">
        Classified Courier / Displacer Entity File
    </div>

    <!-- INFOBOX -->
    <div class="infobox">

        <div class="infobox-header">
            Character Data
        </div>

        <div class="infobox-image">
             <img src="https://uploads.onecompiler.io/44qukkttr/44qrpv4pn/Flynn.png"
         style="width:100%; height:100%; object-fit:contain;">
            
        </div>

        <table>
            <tr>
                <td><strong>Age</strong></td>
                <td>Older than you think, younger than you'd expect</td>
            </tr>

            <tr>
                <td><strong>Species</strong></td>
                <td>Human?</td>
            </tr>

            <tr>
                <td><strong>Height</strong></td>
                <td>6'1</td>
            </tr>

            <tr>
                <td><strong>Occupation</strong></td>
                <td>Courier / Street Magician / Thief</td>
            </tr>

            <tr>
                <td><strong>Affiliation</strong></td>
                <td>Unaligned (Traveling)</td>
            </tr>

            <tr>
                <td><strong>Residence</strong></td>
                <td>Daiquiri (Coastal House)</td>
            </tr>
        </table>

    </div>

    <!-- OPENING NOTE -->
    <div class="section">
        <h2>Encrypted Message</h2>

        <p>
            To Flynn,<br><br>
            when you make it to Aegis, don’t cause too much trouble please…<br><br>
            
        </p>
    </div>

    <!-- PERSONALITY -->
    <div class="section">
        <h2>Personality</h2>

        <p>
            Flynn Decra is a thrill-seeking courier and opportunistic thief driven by the pursuit of risk, profit, and the chase itself. He rejects heroic ideals and moral obligation, instead valuing personal gain, entertainment, and freedom from constraint.
            <br><br>
            He presents as casual and careless, but operates with sharp opportunism and high adaptability, particularly in high-risk scenarios.
        </p>

        <p>
            He views life as a game of leverage and odds, preferring to operate at the edge of failure where reward and danger intersect.
        </p>
    </div>

    <!-- APPEARANCE -->
    <div class="section">
        <h2>Appearance</h2>

        <p>
            Flynn stands at 6'1" with a lean swimmer’s build and a defined jawline. He has long wavy white hair, often slicked back.
            His expression is usually a slight grin, though he can adopt a precise and unreadable poker face when working.
        </p>

        <p>
            He appears approximately 19–26 years old, though his true age is uncertain or inconsistently reported.
        </p>
    </div>

    <!-- ABILITIES -->
    <div class="section">
        <h2>Abilities Overview</h2>

        <p>
            Flynn is classified as a <strong>Displacer</strong>, an individual originating from spatially unstable or warped regions of existence.
            His abilities center around spatial manipulation, card-based magical systems, and duplication-based artifact creation.
        </p>

        <p>
            He channels most abilities through card systems and magical instruments, including his primary systems:
        </p>

        <ul>
            <li>52 Windows: Courier’s Highway (spatial portals / wormholes)</li>
            <li>Memory Cards (stored magic, single-use abilities, compression system)</li>
            <li>Counterfeit (magical duplication and item replication)</li>
        </ul>
    </div>

    <!-- ABILITY 1 -->
    <div class="section">
        <h2>Ability I — 52 Windows: Courier’s Highway</h2>

        <p>
            Flynn manifests spatial “windows” in the form of card-sized portals that can be expanded into large-scale traversal gateways.
            These portals allow near-instant travel and environmental interaction across distances.
        </p>

        <p>
            Each window requires pairing (entry/exit), and can be recalled or repositioned mentally. However, overextension of focus destabilizes active windows.
        </p>

        <p>
            Specialized techniques include acceleration chaining, suction/repulsion force layering, and spatial reconnaissance via proximity sensing.
        </p>
    </div>

    <!-- ABILITY 2 -->
    <div class="section">
        <h2>Ability II — Memory Cards</h2>

        <p>
            Flynn stores magical effects, captured abilities, and recorded events into consumable “memory cards.”
            These cards can be activated once before depletion, or reshuffled at the cost of corruption.
        </p>

        <p>
            Corrupted cards become unstable and function as volatile explosive outputs rather than controlled spells.
        </p>

        <p>
            Advanced systems include snapshot capture, deck compression, lossless ritual restructuring, and transferable “gift cards.”
        </p>
    </div>

    <!-- ABILITY 3 -->
    <div class="section">
        <h2>Ability III — Counterfeit</h2>

        <p>
            Flynn can replicate magical and physical objects through touch-based duplication. Replicas retain partial effectiveness but degrade in power and durability.
        </p>

        <p>
            Mass duplication enables overwhelming quantity-based strategies, while enhanced techniques allow controlled telekinetic manipulation of copied objects.
        </p>

        <p>
            Integration with Memory Cards enables hybrid constructs with layered functionality at the cost of structural stability.
        </p>
    </div>

    <!-- DESCRIPTION -->
    <div class="section">
        <h2>Overview</h2>

        <p>
            Flynn is not a traditional hero or villain. He is an opportunist defined by motion, deception, and transactional survival.
            His motivations are rooted in wealth accumulation, thrill-seeking, and self-directed freedom rather than ideology.
        </p>

        <p>
            His presence in any system introduces unpredictability due to his ability to bend space, replicate assets, and weaponize information.
        </p>
    </div>

</section>
<!-- MALRIK VOSKIN -->

<section id="Malrik Voskin" class="article">

    <div class="article-title">Malrik Voskin</div>

    <div class="subtitle">
        Classified Profile Entry
    </div>

    <!-- INFOBOX -->
    <div class="infobox">

        <div class="infobox-header">
            Character Data
        </div>

        <div class="infobox-image">
            <img src="your-image.png" style="width:100%; height:100%; object-fit:cover;">
        </div>

        <table>
            <tr>
                <td><strong>Age</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Gender</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Height</strong></td>
                <td>???</td>
            </tr>

            <tr>
                <td><strong>Species</strong></td>
                <td>???</td>
            </tr>
        </table>

    </div>

    <div class="section">
        <h2>Appearance</h2>
        <p>
            Describe the character’s physical traits here—hair, eyes, clothing, markings, etc.
        </p>
    </div>

    <div class="section">
        <h2>Abilities</h2>
        <p>
            List powers, skills, or special traits here.
        </p>
        <tr>
    <td><strong>Abilities</strong></td>
    <td>Fire manipulation, regeneration, etc.</td>
</tr>
    </div>

    <div class="section">
        <h2>Background</h2>
        <p>
            Character lore, history, origin, etc.
        </p>
    </div>

</section>


<!-- CONTAINMENT -->

<section id="containment" class="article">

    <div class="article-title">Containment Protocols</div>

    <div class="subtitle">
        Restricted Security Documentation
    </div>

    <div class="section">

        <h2>Protocol Types</h2>

        <p>
            Containment classifications range from passive observation
            to total environmental lockdown.
        </p>

    </div>

</section>

<!-- EXPERIMENTS -->

<section id="experiments" class="article">

    <div class="article-title">Experiment Logs</div>

    <div class="subtitle">
        Internal Research Documents
    </div>

    <div class="section">

        <h2>Testing Procedures</h2>

        <p>
            Experimental procedures are archived chronologically
            and linked through the database network.
        </p>

    </div>

</section>

<!-- HISTORY -->

<section id="history" class="article">

    <div class="article-title">Historical Incidents</div>

    <div class="subtitle">
        Archived Event Timeline
    </div>

    <div class="section">

        <h2>Foundation Era</h2>

        <p>
            The F.O.R.N.I.X system originated as a decentralized
            intelligence archive during early containment initiatives.
        </p>

    </div>

</section>

<!-- ARCHIVES -->

<section id="archives" class="article">

    <div class="article-title">Archives</div>

    <div class="subtitle">
        Legacy Documents and Records
    </div>

    <div class="section">

        <h2>Data Recovery</h2>

        <p>
            Multiple corrupted entries remain inaccessible.
        </p>

    </div>

</section>

<footer>
    F.O.R.N.I.X Internal Database • Access Logged • Unauthorized distribution prohibited
</footer>

</main>

</div>

<script>

/* ARTICLE NAVIGATION */

function showArticle(articleId){

    let articles = document.querySelectorAll(".article");

    articles.forEach(article=>{
        article.classList.remove("active");
    });

    document.getElementById(articleId).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

/* SEARCH FUNCTION */

function searchArticle(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let articles = document.querySelectorAll(".article");

    let found = false;

    articles.forEach(article=>{

        let title = article.querySelector(".article-title")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            article.classList.add("active");
            found = true;

        }else{

            article.classList.remove("active");

        }

    });

    if(!found){

        alert("No matching article found.");

    }

}

/* ENTER KEY SEARCH */

document.getElementById("searchInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchArticle();

    }

});

/* THEME TOGGLE */

let darkMode = true;

function toggleTheme(){

    if(darkMode){

        document.body.style.background = "#f6f6f6";
        document.body.style.color = "#111";

        darkMode = false;

    }else{

        document.body.style.background = "#0d1117";
        document.body.style.color = "#e6edf3";

        darkMode = true;

    }

}

function searchArticle(){

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let articles =
        document.querySelectorAll(".article");

    let found = false;

    articles.forEach(article=>{

        let titleElement =
            article.querySelector(".article-title");

        let title =
            titleElement
            ? titleElement.innerText.toLowerCase()
            : "";

        let id =
            article.id.toLowerCase();

        if(title.includes(input) || id.includes(input)){

            showArticle(article.id);
            found = true;
        }

    });

    if(!found){
        alert("No matching article found.");
    }

}





</script>

</body>
</html>
</body>
</html>






