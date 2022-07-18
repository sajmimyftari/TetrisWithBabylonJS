
        var canvas = document.getElementById("renderCanvas");

        var startRenderLoop = function (engine, canvas) {
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();

                }
            });
        }

        

    var engine = null;
    var scene = null;
    var sceneToRender = null;
    var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
    const createScene =  () => {
    
    const scene = new BABYLON.Scene(engine);

    let random_number
    let second_number
    var first_instance = false
    var shape
    var curr_shape

    const I_ROTATIONS = [
        [
        [1,1,1,1],
        ],
        [
        [1],
        [1],
        [1],
        [1],
        ],
        [
        [1,1,1,1],
        ],
        [
        [1],
        [1],
        [1],
        [1],
        ]
    ]
    const J_ROTATIONS = [
        [
        [1,1],
        [1,0],
        [1,0],
        ],
        [
        [1,0,0],
        [1,1,1],
        ],
        [
        [0,1],
        [0,1],
        [1,1],
        ],
        [
        [1,1,1],
        [0,0,1],
        ],
    ]

    const L_ROTATIONS = [
        [
        [1,0],
        [1,0],
        [1,1],
        ],
        [
        [0,0,1],
        [1,1,1],
        ],
        [
        [1,1],
        [0,1],
        [0,1],
        ],
        [
        [1,1,1],
        [1,0,0],
        ],
    ]
    
    const O_ROTATIONS = [
        [
        [1,1],
        [1,1],
        ],
        [
        [1,1],
        [1,1],
        ],
        [
        [1,1],
        [1,1],
        ],
        [
        [1,1],
        [1,1],
        ]
    ]

    const S_ROTATIONS = [
        [
        [1,0],
        [1,1],
        [0,1],
        ],
        [
        [0,1,1],
        [1,1,0],
        ],
        [
        [1,0],
        [1,1],
        [0,1],
        ],
        [
        [0,1,1],
        [1,1,0],
        ],
    ]
    const Z_ROTATIONS = [
        [
        [0,1],
        [1,1],
        [1,0],
        ],
        [
        [1,1,0],
        [0,1,1],
        ],
        [
        [0,1],
        [1,1],
        [1,0],
        ],
        [
        [1,1,0],
        [0,1,1],
        ],
    ]
    const B_ROTATIONS = [
        [
        [0,1],
        [1,1],
        [0,1],
        ],
        [
        [1,1,1],
        [0,1,0],
        ],
        [
        [1,0],
        [1,1],
        [1,0],
        ],
        [
        [0,1,0],
        [1,1,1],
        ],
    ]

    var red = new BABYLON.StandardMaterial("red", scene);
    red.diffuseTexture = new BABYLON.Texture("red.png", scene);
    red.diffuseTexture.hasAlpha = true;
    red.backFaceCulling = false;

    var purple = new BABYLON.StandardMaterial("purple", scene);
    purple.diffuseTexture = new BABYLON.Texture("purple.png", scene);
    purple.diffuseTexture.hasAlpha = true;
    purple.backFaceCulling = false;

    var green = new BABYLON.StandardMaterial("green", scene);
    green.diffuseTexture = new BABYLON.Texture("green.png", scene);
    green.diffuseTexture.hasAlpha = true;
    green.backFaceCulling = false;

    var blue = new BABYLON.StandardMaterial("blue", scene);
    blue.diffuseTexture = new BABYLON.Texture("blue.png", scene);
    blue.diffuseTexture.hasAlpha = true;
    blue.backFaceCulling = false;

    var yellow = new BABYLON.StandardMaterial("yellow", scene);
    yellow.diffuseTexture = new BABYLON.Texture("yellow.png", scene);
    yellow.diffuseTexture.hasAlpha = true;
    yellow.backFaceCulling = false;

    var orange = new BABYLON.StandardMaterial("orange", scene);
    orange.diffuseTexture = new BABYLON.Texture("orange.png", scene);
    orange.diffuseTexture.hasAlpha = true;
    orange.backFaceCulling = false;

    var cyan = new BABYLON.StandardMaterial("cyan", scene);
    cyan.diffuseTexture = new BABYLON.Texture("cyan.png", scene);
    cyan.diffuseTexture.hasAlpha = true;
    cyan.backFaceCulling = false;
    var grey = new BABYLON.StandardMaterial(scene);
    grey.alpha = 0.8;
    grey.diffuseColor = new BABYLON.Color3(127/255,127/255,127/255);

    var color
    var color2

    const shapes = new Array(Z_ROTATIONS,S_ROTATIONS,L_ROTATIONS,J_ROTATIONS,I_ROTATIONS,B_ROTATIONS,O_ROTATIONS);

    var runningshapes = []
    var runningNextshapes = []
    let currIndex

    
    const map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]   

    createGrid(map)
    spawnShape() 
    
    // const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    // camera.attachControl(canvas, true);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -50), scene);
    // camera.position = new BABYLON.Vector3(0,5, 10);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.position = new BABYLON.Vector3(4.5,-7,20);

    // This attaches the camera to the canvas
    // camera.attachControl(canvas, true);
    // camera.lockedTarget = new BABYLON.Vector3(4.5, -14.5, 30);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function nextShapeDraw(){
        if (first_instance == false){
            first_instance = true
            var usingNextShape = shapes[second_number][0];
            if (second_number == 0){
                color2 = red
            }
            else if (second_number ==1){
                color2 = green
            }
            else if (second_number ==2){
                color2 = orange
            }
            else if (second_number ==3){
                color2 = blue
            }
            else if (second_number ==4){
                color2 = cyan
            }
            else if (second_number ==5){
                color2 = purple
            }
            else if (second_number ==6){
                color2 = yellow
            }
            currIndex = 0
            runningNextshapes = []
            for (let i=0;i<usingNextShape.length;i++){
                for (let j = 0; j < usingNextShape[0].length; j++) {
                    if (usingNextShape[i][j] == 1) {
                        shape = BABYLON.MeshBuilder.CreateBox("box", {width: 1, height: 1, depth: 1});
                        shape.position = new BABYLON.Vector3(i, -j, 50);
                        shape.material = color2
                        runningNextshapes.push(shape);
                    }
                }
            }
        }
        else{
            for (u=0;u<runningNextshapes.length;u++){
                runningNextshapes[u].dispose()
            }
            var usingNextShape = shapes[second_number][0];
            if (second_number == 0){
                color2 = red
            }
            else if (second_number ==1){
                color2 = green
            }
            else if (second_number ==2){
                color2 = orange
            }
            else if (second_number ==3){
                color2 = blue
            }
            else if (second_number ==4){
                color2 = cyan
            }
            else if (second_number ==5){
                color2 = purple
            }
            else if (second_number ==6){
                color2 = yellow
            }
            currIndex = 0
            runningNextshapes = []
            for (let i=0;i<usingNextShape.length;i++){
                for (let j = 0; j < usingNextShape[0].length; j++) {
                    if (usingNextShape[i][j] == 1) {
                        shape = BABYLON.MeshBuilder.CreateBox("box", {width: 1, height: 1, depth: 1});
                        shape.position = new BABYLON.Vector3(-10+i, -j, 50);
                        shape.material = color2
                        runningNextshapes.push(shape);
                    }
                }
            }            
        }

    }
    

    function spawnShape(){
        if (first_instance == false){
            first_instance = true
            random_number = Math.round(getRandomArbitrary(0, 6));
            second_number = Math.round(getRandomArbitrary(0, 6));
        }
        else{
            random_number = second_number
            second_number = Math.round(getRandomArbitrary(0, 6));
        }
        // random_number = Math.round(getRandomArbitrary(0, 6));
        var usingShape = shapes[random_number][0];
        if (random_number == 0){
            color = red
        }
        else if (random_number ==1){
            color = green
        }
        else if (random_number ==2){
            color = orange
        }
        else if (random_number ==3){
            color = blue
        }
        else if (random_number ==4){
            color = cyan
        }
        else if (random_number ==5){
            color = purple
        }
        else if (random_number ==6){
            color = yellow
        }
        currIndex = 0
        runningshapes = []
        for (let i=0;i<usingShape.length;i++){
            for (let j = 0; j < usingShape[0].length; j++) {
                if (usingShape[i][j] == 1) {
                    shape = BABYLON.MeshBuilder.CreateBox("box", {width: 1, height: 1, depth: 1});
                    shape.position = new BABYLON.Vector3(i, -j, 50);
                    shape.material = color
                    runningshapes.push(shape);
                }
            }
        }
        nextShapeDraw()
        // curr_shape = shape
    }

    var score = 0
    
    const POINTS = [100,300,500,800];


    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var scoreText = new BABYLON.GUI.TextBlock();
    scoreText.text = score.toString();
    scoreText.top = -300;
    scoreText.left = 450;
    scoreText.width = 1;
    scoreText.height = 0.4;
    scoreText.color = "white";
    scoreText.fontSize = 50;
    advancedTexture.addControl(scoreText);

    var count = 0
    var scoreReset = 2
    var scoreCount = 0
    var scoreCounter = 1
    var scoreMultiplier = 0

    var time_second = 60
    var counter = 1

    function removeRow(row){
        for(i=0;i<map[0].length;i++){
            map[row][i].dispose()
            map[row][i] = 0
        }
        if (scoreMultiplier < 3){
            scoreMultiplier+=1
            score += POINTS[0] * scoreMultiplier
        }
        else{
            score += 200
            scoreMultiplier = 0
        }
        moveDown(map, row)
    }


    function moveDown(map, row){
        for(i=row;i>0;i--){
            for(j=0;j<map[0].length;j++){
                if (map[i][j] !== 0){
                    map[i][j].position.y -= 1
                    map[i + 1][j] = map[i][j]
                    map[i][j] = 0 
                }
            }
        }  
    }


    function createGrid(map){
        for (let i=0;i<map.length - 1;i++){
            for (let j=0;j<map[0].length;j++){ 
                var grid = BABYLON.MeshBuilder.CreateBox("grid_box", {width: 1, height: 1, depth:0.5,});
                grid.position = new BABYLON.Vector3(j, -i, 50);
                grid.visibility = 0.5
                grid.material = grey
            }
        }
    }

    let result
    

    
    function checkRows(){
        for (let i=0;i<map.length-1;i++){
            result = map[i].every(element => {
                if (element !== 0) {
                    return true;
                }
            });  
            if (result == true){
                removeRow(i)
            }        
        }
                    
    }

    var canMoveDown
    

    // checkRotation Code
    // var rotationFree = []
    // if (currIndex <= 3){
    //     usingShape = shapes[random_number][currIndex];
    //     for (let i=0;i<usingShape.length;i++){
    //         for (let j = 0; j < usingShape[0].length; j++) {
    //             rotationFree.push(map[i-currXpos][j+currYpos / 1])
    //             console.log(map[i-currXpos][j+currYpos / -1])
    //         }
    //     }
    // }
    // else{
    //     usingShape = shapes[random_number][0];
    //     currIndex = 0
    //     for (let i=0;i<usingShape.length;i++){
    //         for (let j = 0; j < usingShape[0].length; j++) {
    //             rotationFree.push(map[i-currXpos][j+currYpos / -1])
    //             console.log(map[i-currXpos][j+currYpos / -1])
    //         }
    //     }
    // }



    function rotateShape(currXpos, currYpos){
        currIndex += 1
        for (x=0;x<runningshapes.length;x++){
            runningshapes[x].dispose()
        }
        if (currIndex <= 3){
            usingShape = shapes[random_number][currIndex];
            runningshapes = []
            for (let i=0;i<usingShape.length;i++){
                for (let j = 0; j < usingShape[0].length; j++) {
                    if (usingShape[i][j] == 1) {
                        shape = BABYLON.MeshBuilder.CreateBox("box", {width: 1, height: 1, depth: 1});
                        shape.position = new BABYLON.Vector3(i-currXpos, -j+currYpos, 50);
                        shape.material = color
                        runningshapes.push(shape);
                    }
                }
            }            
        }
        else{
            usingShape = shapes[random_number][0];
            currIndex = 0
            runningshapes = []
            for (let i=0;i<usingShape.length;i++){
                for (let j = 0; j < usingShape[0].length; j++) {
                    if (usingShape[i][j] == 1) {
                        shape = BABYLON.MeshBuilder.CreateBox("box", {width: 1, height: 1, depth: 1});
                        shape.position = new BABYLON.Vector3(i-currXpos, -j+currYpos, 50);
                        shape.material = color
                        runningshapes.push(shape);
                    }
                }
            }  
        }

    }



    engine.runRenderLoop(function(){
        scoreText.text = score.toString();
        if (count >= time_second){
            for (b=0;b<map[0].length;b++){
                if (map[0][b] !== 0){
                    location.replace("GameOver.html"+"?val="+score);
                }
            }
            for (let i=0;i<runningshapes.length;i++){
                if (map[runningshapes[i].position.y / -1 + 1][runningshapes[i].position.x] !== 0){
                    for(let i=0;i<runningshapes.length;i++){
                        map[runningshapes[i].position.y / -1][runningshapes[i].position.x] = runningshapes[i]
                    }
                    canMoveDown = false
                    spawnShape()
                    checkRows()
                }
                else{
                    canMoveDown = true
                }                 
            }
            if (canMoveDown == true){
                for(let i=0;i<runningshapes.length;i++){
                    runningshapes[i].position.y -= 1
                } 
                canMoveDown = false               
            }

            count = 0
        }
        // checkRows()
        count += counter
        if (scoreCount >= scoreReset){
            scoreCount=0
            scoreMultiplier = 0
        }
        scoreCount += scoreCounter
    }); 
    

    var canMoveLeft
    var canMoveRight

    window.addEventListener("keydown",(ev) =>{
        if (ev.keyCode == 65){ 
            for (let i=0;i<runningshapes.length; i++){
                if (runningshapes[i].position.x <= 0){
                    return
                }
                else{
                    for (let i=0;i<runningshapes.length;i++){
                        let result = runningshapes.every(element => {
                            if (map[element.position.y / -1][element.position.x - 1] == 0) {
                                return true;
                            }
                        });
                    if (result == true){
                        for(let i=0;i<runningshapes.length;i++){
                            runningshapes[i].position.x -= 1
                            if (runningshapes.length-1 ===i){
                                return
                            }
                        }
                    }
                    }                   
                }
            }                           
        }
        else if (ev.keyCode == 68){
            for (let i=0;i<runningshapes.length; i++){
                if (runningshapes[i].position.x >= 9){
                    return
                }
                else{
                    for (let i=0;i<runningshapes.length;i++){
                        let result = runningshapes.every(element => {
                            if (map[element.position.y / -1][element.position.x + 1] == 0) {
                                return true;
                            }
                        });
                    if (result == true){
                        for(let i=0;i<runningshapes.length;i++){
                            runningshapes[i].position.x += 1
                            if (runningshapes.length-1 ===i){
                                return
                            }
                        }
                    }                
                    }                    
                }
            }
        }

        if (ev.keyCode == 83){
            counter = 10
            count += counter 
        }
        if (ev.keyCode == 16){
            rotateShape(runningshapes[0].position.x /-1, runningshapes[0].position.y)
        }
    }); 

    window.addEventListener("keyup",(ev) =>{
        if (ev.keyCode == 83){
            counter = 1
            count += counter
        }
    }); 


    return scene;
}
                window.initFunction = async function() {
                    
                    
                    var asyncEngineCreation = async function() {
                        try {
                        return createDefaultEngine();
                        } catch(e) {
                        console.log("the available createEngine function failed. Creating the default engine instead");
                        return createDefaultEngine();
                        }
                    }

                    window.engine = await asyncEngineCreation();
        if (!engine) throw 'engine should not be null.';
        startRenderLoop(engine, canvas);
        window.scene = createScene();};
        initFunction().then(() => {sceneToRender = scene                    
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });