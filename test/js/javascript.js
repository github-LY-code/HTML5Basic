window.onload = function(){
    var button = document.querySelector('button');
    button.addEventListener('click',createParagraph);
    function createParagraph(){
        var oSs = document.styleSheets[0];
        var para = document.querySelector('p');
        if(para == null){
            para = document.createElement('p');
            para.textContent = "hello world";
            document.body.appendChild(para);
            oSs.addRule('p','color:rgba(0,0,200,0.6);font-size:1.2rem');
        }
    }
}