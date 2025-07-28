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
}
loading();

function bgchange() {
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");

    elems.forEach(function (elemTag) {
        elemTag.addEventListener("mouseenter", function () {
            var bgimgurl = elemTag.getAttribute("data-img");
            console.log(bgimgurl);
            page2.style.backgroundImage = `url(${bgimgurl})`;
            page2.style.backgroundSize = `cover`;
            page2.style.backgroundPosition = `center`;
        });
        elemTag.addEventListener("mouseleave", function () {
            page2.style.backgroundImage = ``;
        });
    });
}
bgchange();

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


// var heights ="";
// var images = document.querySelectorAll(".image-container img");
// images.forEach(function (image) {
//     var ogheight = image.naturalHeight;
//     heights += ogheight + "px, ";
// });
// console.log(heights);


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
