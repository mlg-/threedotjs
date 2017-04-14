  var florals = new THREE.TextureLoader().load( "/images/florals.jpg" );

  var scene = new THREE.Scene();
  scene.background = florals;
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );


  // var geo = new THREE.SphereGeometry( 1, 1, 1 );
  // var mat = new THREE.MeshBasicMaterial( {map: duck} );
  // var sphere = new THREE.Mesh( geo, mat );

  // scene.add( sphere );

  var kitten = new THREE.TextureLoader().load( "/images/kitten.jpg" );

  var g = new THREE.BoxBufferGeometry( 1, 1, 1 );
  var m = new THREE.MeshBasicMaterial( { map: kitten } );
  var c = new THREE.Mesh( g, m );
  var a = new THREE.Vector3( 5, -12, 10 );

  var duckling = new THREE.TextureLoader().load( "/images/duckling.jpg" );

  var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  var material = new THREE.MeshBasicMaterial( { map: duckling } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  scene.add( c );

  camera.position.z = 5;

  var render = function () {
    requestAnimationFrame( render );

    cube.position = a;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    c.rotation.x += 0.01;
    c.rotation.y += 0.01;


    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

render();

