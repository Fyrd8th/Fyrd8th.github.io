document.addEventListener('DOMContentLoaded', () => {
    // hooks are now available

    // get modifiable elements
    const smallmenu = document.getElementById('smallmenu');
    const smallmenuclose = document.querySelectorAll('a.smallmenuclose');
    const photogrid = document.querySelectorAll('div.w3-third > img');
    const lightbox = document.getElementById('lightbox');

    // opening the lightbox when a portfolio photo is clicked
    photogrid.forEach(photo => {
        photo.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById("img01").src = photo.src;
            document.getElementById("lightbox").style.display = "block";
            const headingText = document.getElementById("portfolio-heading");
            headingText.innerHTML = photo.alt;
            const captionText = document.getElementById("portfolio-caption");
            captionText.innerHTML = photo.getAttribute('data-caption');
        });
    })

    // closing the lightbox
    lightbox.addEventListener('click', (e) => {
        e.preventDefault();
        lightbox.style.display = 'none';
    });

    // Scripts to open and close sidebar when screen is small
    smallmenu.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    });

    smallmenuclose.forEach(close => {
        close.addEventListener('click', (e) => {
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("myOverlay").style.display = "none";
        });
    });
});

/**
 * hjhguhihjuyjuy
 */