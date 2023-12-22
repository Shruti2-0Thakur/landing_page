Shery.imageEffect("#back", {style:5, config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.05229793977813},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.76,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}}, gooey:true})
// Shery.imageEffect("#back", {style:5, debug:true, gooey:true});
document.addEventListener('DOMContentLoaded', function() {
    const roleElement = document.querySelector('#hero-section h4');

    if (roleElement) {
        const roles = ['Student...', 'programmer...', 'web developer...'];
        let currentIndex = 0;
        let currentLetterIndex = 0;

        function updateRole() {
            const currentRole = roles[currentIndex];
            const currentText = currentRole.slice(0, currentLetterIndex + 1);
            roleElement.textContent = currentText;

            if (currentLetterIndex < currentRole.length - 1) {
                currentLetterIndex++;
            } else {
                currentIndex = (currentIndex + 1) % roles.length;
                currentLetterIndex = 0;
            }
        }

        setInterval(updateRole, 200); // Change role every 200 milliseconds (adjust the time as needed)
    }
});
