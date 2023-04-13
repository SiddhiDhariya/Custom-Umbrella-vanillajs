let logo=false;
function importImg() {
    let input = document.createElement('input');
    let name="";
    input.type = 'file';
    input.onchange = _ => {
              let files =   Array.from(input.files);
              if(!(files[0].type === "image/png" || files[0].type === "image/jpg" ))
              {
                alert('Please Enter JPG or PNG Type Image');
                            }
                else if(files[0].size/1000000 > 5)
                {
                            alert('Please Import Image Which is Less Than 5MB');
                }
                 else {
                    let img = document.getElementById("logo1");
                    var url = URL.createObjectURL(files[0]);
                    img.src = url;
                    logo=true;
                    document.getElementById("logo1").style.opacity = 1;
                    console.log(url);
                    console.log(files);
                    name=files[0].name;
                    console.log(name);
                    document.getElementById("name").innerHTML=name;
                    document.getElementById("name").style.fontWeight = "500";
                    document.getElementById("name").style.fontSize = "15px";  
                    }
          };
        input.click();   
}
function onClickHandler(color) {
    let img1 = document.getElementById("image");
        img1.style.opacity=0;
        document.getElementById("spin").style.opacity = 1;
        document.getElementById("logo1").style.opacity = 0; 
                    setTimeout(function(){
                        img1.src=color+".png";
                        img1.style.opacity = 1;
                        if(logo)
                        {
                            document.getElementById("logo1").style.opacity = 1;
                        }
                    },8000);
        document.getElementById("bg").style.backgroundColor="light"+color;
        document.getElementById("btn").style.backgroundColor=color;
        reset_animation();
}
function reset_animation() {
    var el = document.getElementById('spin');
    el.style.animation = 'none';
    el.offsetHeight; 
    el.style.animation = null; 
  }