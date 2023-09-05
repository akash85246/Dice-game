var i=Math.floor(Math.random()*6) + 1;
    var j=Math.floor(Math.random()*6) + 1;

    var a="images/dice"+i+".png";
    var b="images/dice"+j+".png";

    document.querySelector("div>div>.img1").setAttribute("src",a);
    document.querySelector("div>div>.img2").setAttribute("src",b);
    
    if(i>j)
    document.querySelector("div>h1").textContent="🏆 Player 1 Wins!";
    else if(i<j)
    document.querySelector("div>h1").textContent="Player 2 Wins! 🏆";
    else
    document.querySelector("div>h1").textContent="Draw!";