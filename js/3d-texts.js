var camera, scene, renderer

init()
animate()

function init() {
  var container1 = document.getElementById('container1')
  var container2 = document.getElementById('container2')
  var container3 = document.getElementById('container3')
  var container4 = document.getElementById('container4')
  var container5 = document.getElementById('container5')
  var container6 = document.getElementById('container6')
  var container7 = document.getElementById('container7')
  var container8 = document.getElementById('container8')

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.set(0, 0, 1000)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xe7ecf2)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(2)
  renderer.setSize(window.innerWidth, window.innerHeight)

  container1.appendChild(renderer.domElement)

  var loader = new THREE.FontLoader()
  loader.load('https://s3.amazonaws.com/external-pages/three.js-master/examples/fonts/Spectral_Regular.json', function(font) {
    var xMid, text

    var color = 0x000000
    var matDark = new THREE.LineBasicMaterial({
      color: color,
      side: THREE.DoubleSide
    })

    var message = 'The data in our blood is calling'
    var shapes = font.generateShapes(message, 20)
    var geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()
    xMid = -0.514 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    // make shape ( N.B. edge view not visible )

    text = new THREE.Mesh(geometry, matDark)
    scene.add(text)
    text.position.set(0, -10, 0)
  }) //end load function

  controls = new THREE.TrackballControls(camera, renderer.domElement)
  controls.rotateSpeed = 4

  window.addEventListener('resize', onWindowResize, false)
} // end init

// container2.appendChild( renderer.domElement );

//   var loader2 = new THREE.FontLoader();
//   loader2.load( 'https://s3.amazonaws.com/external-pages/three.js-master/examples/fonts/Spectral_Regular.json', function ( font ) {

//     var xMid2, text2;

//     var color2 = 0x000000;
//     var matDark2 = new THREE.LineBasicMaterial( {
//       color: color,
//       side: THREE.DoubleSide
//     } );

//     var message2 = "One foot in cyberspace";
//     var shapes2 = font.generateShapes( message2, 20 );
//     var geometry2 = new THREE.ShapeBufferGeometry( shapes2 );
//     geometry2.computeBoundingBox();
//     xMid2 = - 0.514 * ( geometry2.boundingBox.max.x - geometry2.boundingBox.min.x );
//     geometry2.translate( xMid2, 0, 0 );

//     // make shape ( N.B. edge view not visible )

//     text2 = new THREE.Mesh( geometry2, matDark2 );
//     scene.add( text2 );
//     text2.position.set( 0, -10, 0 );

//   } ); //end load function

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
