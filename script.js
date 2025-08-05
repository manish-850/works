function loading() {
    var loadertl = gsap.timeline();

    loadertl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.8,
        ease: "expo.out",
    });

    loadertl.from(
        "#yellow2",
        {
            top: "100%",
            delay: 0.8,
            duration: 0.5,
            ease: "expo.out",
        },
        "anim"
    );

    loadertl.to(
        "#loader h1",
        {
            delay: 0.5,
            duration: 1,
            color: "black",
        },
        "anim"
    );

    loadertl.to("#loader", {
        opacity: 0,
    });

    loadertl.to("#loader", {
        display: "none",
    });
};
loading();

function hovereffect() {
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");

    elems.forEach(function (elemTag) {
        elemTag.addEventListener("mouseenter", function () {
            var bgimgurl = elemTag.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimgurl})`;
            page2.style.backgroundSize = `cover`;
            page2.style.backgroundPosition = `center`;
        });
        elemTag.addEventListener("mouseleave", function () {
            page2.style.backgroundImage = ``;
        });
    });
};
hovereffect();

function gallery() {

    var arr = [
        { text: "Cats dance wildly under the full moon.", src: "https://images.unsplash.com/photo-1690544252334-ff1765e6d212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D" },
        { text: "Coffee warms souls on rainy cold mornings.", src: "https://images.unsplash.com/photo-1654944989990-9da8fa364ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D" },
        { text: "Stars blink softly in the velvet sky.", src: "https://images.unsplash.com/photo-1717488703065-6968d2d143b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D" },
        { text: "Robots dream about wires and circuits.", src: "https://images.unsplash.com/photo-1707119269306-f4ee0564ba29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D" },
        { text: "Trees whisper secrets to passing birds.", src: "https://images.unsplash.com/photo-1723464340947-247673835ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D" },
        { text: "Time melts slowly in forgotten places.", src: "https://images.unsplash.com/photo-1645231881968-9c98338ee28d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDI%3D" },
        { text: "Books contain worlds unknown to many.", src: "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDI%3D" },
        { text: "Shadows follow silently in quiet streets.", src: "https://images.unsplash.com/photo-1654944990404-7cc4ff0fb2d4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { text: "Laughter echoes through empty marble halls.", src: "https://images.unsplash.com/photo-1718395365786-c6c17550c03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDI%3D" },
        { text: "Waves crash gently on silent shores.", src: "https://images.unsplash.com/photo-1650612546797-4b8cf3625a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDI%3D" },
        { text: "Bright stars twinkle in silent night.", src: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" },
        { text: "Dreams echo loudly in moonlight shadows.", src: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" },
        { text: "Winds whisper quietly through ancient trees.", src: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" },
        { text: "Time travels softly through broken dreams.", src: "https://images.unsplash.com/photo-1661051830189-54dfcfcf3a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" },
        { text: "Hope grows brighter with each sunrise.", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" },
        { text: "Life moves faster than we imagine.", src: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" },


    ];

    var clutter = "";
    var page3 = document.querySelector("#page3");


    arr.forEach(function (item, index) {
        clutter += `<div class="image-container">
                <div class="overlay"><p>${item.text}</p></div>
                <img src="${item.src}" alt="">
            </div>`;
    });
    page3.innerHTML = clutter;
};
gallery();

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });


    var backIcon = document.querySelector("#footer #part1 i");
    var backText = document.querySelector("#footer #part1 p");
    backIcon.addEventListener("click", function () {
        scroll.scrollTo(0);
    });

    backText.addEventListener("click", function () {
        scroll.scrollTo(0);
    });
};
loco();

