

//esta es la primera ruleta con los personajes creados 
let ruleta1 = function (r1) {
  let ruleta, d,f,p,c,l
  let imagenes = []
  //let index =r1.random(16)

  r1.preload = function () {
    imagenes[0] = r1.loadImage('data/ruleta1/i16.jpg')
    imagenes[1] = r1.loadImage('data/ruleta1/i2.jpg')
    imagenes[2] = r1.loadImage('data/ruleta1/i3.jpg')
    imagenes[3] = r1.loadImage('data/ruleta1/i4.jpg')
    imagenes[4] = r1.loadImage('data/ruleta1/i5.jpg')
    imagenes[5] = r1.loadImage('data/ruleta1/i6.jpg')
    imagenes[6] = r1.loadImage('data/ruleta1/i7.jpg')
    imagenes[7] = r1.loadImage('data/ruleta1/i8.jpg')
    imagenes[8] = r1.loadImage('data/ruleta1/i9.jpg')
    imagenes[9] = r1.loadImage('data/ruleta1/i10.jpg')
    imagenes[10] = r1.loadImage('data/ruleta1/i11.jpg')
    imagenes[11] = r1.loadImage('data/ruleta1/i12.jpg')
    imagenes[12] = r1.loadImage('data/ruleta1/i13.jpg')
    imagenes[13] = r1.loadImage('data/ruleta1/i14.jpg')
    imagenes[14] = r1.loadImage('data/ruleta1/i15.jpg')
    imagenes[15] = r1.loadImage('data/ruleta1/i1.jpg')


  }
  r1.setup = function () {
ruleta = true
d, f, p, c,l = false
    let canvas1 = r1.createCanvas(2000, 900)
    canvas1.position(100, 50)
    r1.frameRate(4)

  }

  r1.draw = function () {
    r1.background(0)

    if(ruleta == true){
      for (let i = 0; i < imagenes.length; i = i + 1) {
        let x = r1.random(r1.width)
        let y = r1.random(450)
        r1.tint(100, 200, 200, 70)
        r1.image(imagenes[i], x, y)

        
        }
        
      }
    
    
    if(d == true){
      
          r1.tint(255,255,255)
    r1.image(imagenes[6], r1.width/3, r1.height/4, 500,500)

    }
  

    if(f == true){
     
      r1.tint(255,255,255)
r1.image(imagenes[1], r1.width/3, r1.height/4, 500,500)

    }
    
    if(p == true){
     
      r1.tint(255,255,255)
r1.image(imagenes[12], r1.width/3, r1.height/4, 500,500)

    }

    if(l == true){
     
      r1.tint(255,255,255)
r1.image(imagenes[0], r1.width/3, r1.height/4, 500,500)

    }

    if(c == true){
     
      r1.tint(255,255,255)
r1.image(imagenes[3], r1.width/3, r1.height/4, 500,500)

    }

  }



  r1.keyPressed = function(){
   
    // dani
    if(r1.key == 'd'){
     // ruleta = true
      console.log('funciona')  
      f = false
      p = false 
      l = false 
      c = false
      d = true
      
      
    }
    if(r1.key == 'f'){
     ruleta = true
    console.log('funciona')
      d = false
      p = false
      l = false
      c = false
      f = true
      
    } 
    
    if(r1.key == 'p'){
      ruleta = true
     console.log('funciona')
      d = false
      f = false
      l = false
      c = false
       p = true
       
     } if(r1.key == 'l'){
      ruleta = true
     console.log('funciona')
      d = false
      f = false
      p = false 
      c = false
       l = true
       
     }

     if(r1.key == 'c'){
      ruleta = true
     console.log('funciona')
      d = false 
      f = false
      p = false
      l = false
       c = true
       
     }

     if(r1.key == 'r'){
      ruleta = true
      console.log('funciona')
      d = false
      f = false 
      p = false
      l = false 
      c = false

     }
  }



}

new p5(ruleta1)







//cuestionario 1
let cuestionario2 = function (c1) {
  let fondo
  let fotos 
  
  let l 
  let f 
  let c 
  let d 
  let p 
  let s
  let imagenes3 = []
  let imagenes4 = []
  let imagenes5 = []
  let imagenes6 = []
  let lab = []
  let img = c1.loadImage('data/c1/i34.jpg')
  let img2 = c1.loadImage('data/c1/i38.jpg')
  c1.preload = function () {
    
    imagenes3[0] = c1.loadImage('/data/c1/i1.jpg')
    imagenes3[1] = c1.loadImage('data/c1/i2.jpg')
    imagenes3[2] = c1.loadImage('data/c1/i3.jpg')
    imagenes3[3] = c1.loadImage('data/c1/i4.jpg')
    imagenes3[4] = c1.loadImage('data/c1/i5.jpg')
    imagenes3[5] = c1.loadImage('data/c1/i6.jpg')
    imagenes3[6] = c1.loadImage('data/c1/i7.jpeg')
    imagenes3[7] = c1.loadImage('data/c1/i8.jpeg')

    imagenes4[0] = c1.loadImage('data/c1/i9.jpg')
imagenes4[1] = c1.loadImage('data/c1/i10.jpg')
imagenes4[2] = c1.loadImage('data/c1/i11.jpg')
imagenes4[3] = c1.loadImage('data/c1/i12.jpg')
imagenes4[4] = c1.loadImage('data/c1/i13.jpg')
imagenes4[5] = c1.loadImage('data/c1/i14.jpg')
    imagenes4[6] = c1.loadImage('data/c1/i15.jpg')
    imagenes4[7] = c1.loadImage('data/c1/i16.jpg')

    imagenes5[0] = c1.loadImage('data/c1/i17.jpg')
imagenes5[1] = c1.loadImage('data/c1/i18.jpg')
imagenes5[2] = c1.loadImage('data/c1/i19.jpg')
imagenes5[3] = c1.loadImage('data/c1/i20.jpg')
imagenes5[4] = c1.loadImage('data/c1/i45.jpg')
imagenes5[5] = c1.loadImage('data/c1/i40.jpg')
imagenes5[6] = c1.loadImage('data/c1/i43.jpg')
    imagenes5[7] = c1.loadImage('data/c1/i36.jpg')

imagenes6[0] = c1.loadImage('data/c1/i25.jpeg')
imagenes6[1] = c1.loadImage('data/c1/i44.jpg')
imagenes6[2] = c1.loadImage('data/c1/i27.jpg')
imagenes6[3] = c1.loadImage('data/c1/i28.jpg')
imagenes6[4] = c1.loadImage('data/c1/i29.jpg')
imagenes6[5] = c1.loadImage('data/c1/i30.jpg')
imagenes6[6] = c1.loadImage('data/c1/i31.jpg')
imagenes6[7] = c1.loadImage('data/c1/i32.jpg')    
imagenes6[8] = c1.loadImage('data/c1/i33.jpg') 

lab[0] = c1.loadImage('data/ruleta2/clau3.jpg')
lab[1] = c1.loadImage('data/ruleta2/clau2.jpeg')
lab[2] = c1.loadImage('data/ruleta2/dan3.jpg')
lab[3] = c1.loadImage('data/ruleta2/dan2.jpg')
lab[4] = c1.loadImage('data/ruleta2/daph3.jpg')
lab[5] = c1.loadImage('data/ruleta2/daph2.jpg')
lab[6] = c1.loadImage('data/ruleta2/fer2.jpg')
lab[7] = c1.loadImage('data/ruleta2/fer3.jpg')
lab[8] = c1.loadImage('data/ruleta2/lu2.jpg')
lab[9] = c1.loadImage('data/ruleta2/lu3.jpg')
  }
  c1.setup = function () {
    let canvas3 = c1.createCanvas(1980, 900)
    canvas3.position(100, 1000)
    fotos = true
    fondo = false
  s = false

  }

  c1.draw = function () {
    let x = c1.mouseX
  let y = c1.mouseY
  let ix = c1.width - c1.mouseX
  let iy = c1.height - c1.mouseY
 
    c1.background(0)
    let transparencia = 255
    if(fotos == true){
      for (let i = 0; i < imagenes3.length; i = i + 1) {
        let x = 10
        let y = 10
        x = x + 10
        y = y + 10
        let r = c1.random(200)
        let g = c1.random (100)
        let b = c1.random(100)        
        c1.tint(r,g,b, transparencia)
        c1.image(imagenes3[i], i * 250, 0, 200, 200)
        c1.image(imagenes4[i], i * 250, 230, 200,200)
        c1.image(imagenes5[i], i * 250, 460, 200,200)
        c1.image(imagenes6[i], i*250, 690,200,200 )
  
      }

          if(d == true){        
        c1.background(0)
        c1.tint(255,255,255)
        c1.image(lab[3],ix,c1.height/5,iy, iy)
        c1.image(lab[2], x, c1.height/5,y,y )
      }

      if(l == true){
        c1.background(0)
        c1.tint(255,255,255)
        c1.image(lab[9],ix,c1.height/5,iy, iy)
        c1.image(lab[8], x, c1.height/5,y,y)
      }

      if(f == true){
        c1.background(0)
        c1.tint(255,255,255)
        c1.image(lab[7],ix,c1.height/5,iy, iy)
        c1.image(lab[6], x, c1.height/5,y,y)
      }

      if(p == true){
        c1.background(0)
        c1.tint(255,255,255)
       c1.image(lab[5],ix,c1.height/5,iy, iy)
        c1.image(lab[4], x, c1.height/5,y,y)
      }

      if(c == true){
        c1.background(0)
        c1.tint(255,255,255)        
        c1.image(lab[0], ix, c1.height/5,iy, iy)
        c1.image(lab[1], x, c1.height/5,y,y)
      }

      

      if (c1.mouseIsPressed) {
        console.log(c1.mouseX, c1.mouseY)
      }
  
    }
  }
    
c1.keyPressed = function(){
if(c1.key == 'd'){ 
  console.log('funciona') 
l = false
f = false
p = false
c = false
  d = true
}

if (c1.key == 'l') {
  console.log('funciona')
  d = false
f = false
p = false
c = false
  l = true
}

if(c1.key == 'f'){
console.log('funciona')
l = false
d = false
p = false
c = false
f = true
}

if(c1.key == 'p'){
  console.log('funciona')
  l = false
f = false
d = false
c = false
  p = true
  }

  if(c1.key == 'c'){
    console.log('funciona')
    l = false
f = false
p = false
d = false
    c = true  

    }

    if(c1.key == ' '){
      l = false
f = false
p = false
c = false
d = false
fotos = true

    }
  
    
}
}
new p5(cuestionario2)

