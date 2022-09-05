var luotquay =0
function quay(){
    var random= parseInt(Math.random()*8)
    var nd=document.querySelector('.anh');
    var luot=document.querySelector('.luot')
    sovong=random*3*225;
    console.log(sovong)
    nd.style.rotate=`${sovong}deg`;
    luotquay++;
    luot.innerHTML=`số lượt quay: ${luotquay}`
}