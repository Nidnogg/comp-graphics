/*
Essa animação tem como referência o monstro Cactuar da franquia de jogos Final Fantasy:
https://upload.wikimedia.org/wikipedia/en/9/9b/Cactuar_FFVII_Remake.png
*/

function CactuarAnimation() {}

Object.assign( CactuarAnimation.prototype, {

    init: function() {


        let rightLowerArmTween = new TWEEN.Tween ( {theta: 0})
            .to( {theta:Math.PI/2}, 500)
            .onUpdate(function() {
              let right_lower_arm = robot.getObjectByName("right_lower_arm")
              //right_lower_arm.matrix.makeRotationZ(this.object.theta/2)
              .multiply( new THREE.Matrix4().makeTranslation(0, -2, 0))
              .premultiply( new THREE.Matrix4().makeTranslation(-0.5, 2, 0))
              .premultiply( new THREE.Matrix4().makeTranslation(2.6, 0, 0));
              right_lower_arm.updateMatrixWorld(true);

              // Updating screen
              stats.update();
              renderer.render(scene, camera);    
          
            })

        //BRAÇO DIREITO
        let upperArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/1.8 }, 377)
            .onUpdate(function(){
                /*  Rotação do BRAÇO direito
                    Lê-se o premultiply de trás para a frente. Acontecendo a seguinte sequência de eventos:
                    Desloca-se o braço para o "ponto do ombro", depois para o lado, faz a rotação e então recoloca o braço
                    no lugar
                    Os valores corretos foram alcançados com teste dependendo da movimentação desejada    */          
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");                               
                right_upper_arm.matrix.makeRotationZ(this._object.theta/2)
                .multiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(-0.5, 2, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(2.6, 0, 0 ));

                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })    
        
  
        //BRAÇO ESQUERDO
        let leftUpperArmTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/2.2 }, 388)
        .onUpdate(function(){
            /*  Rotação do BRAÇO direito
                Lê-se o premultiply de trás para a frente. Acontecendo a seguinte sequência de eventos:
                Desloca-se o braço para o "ponto do ombro", depois para o lado, faz a rotação e então recoloca o braço
                no lugar
                Os valores corretos foram alcançados com teste dependendo da movimentação desejada    */          
            let left_upper_arm =  robot.getObjectByName("left_upper_arm");                               
            left_upper_arm.matrix.makeRotationZ(this._object.theta)
            .multiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ))                              
            .premultiply( new THREE.Matrix4().makeTranslation(0.5, 2, 0 ))
            .premultiply( new THREE.Matrix4().makeTranslation(-2.6, 0, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        }) 
        
        //ANTEBRAÇO ESQUERDO
        let leftLowerArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/2 }, 377)
            .onUpdate(function(){
                //Parte análoga à movimentação do braço, mas para o antebraço
                let left_lower_arm =  robot.getObjectByName("left_lower_arm");                               
                left_lower_arm.matrix.makeRotationZ(this._object.theta)
                .multiply( new THREE.Matrix4().makeTranslation(0, -0.5, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(0, -1.2, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(0.5, 0, 0 )); 

                // Updating final world matrix (with parent transforms) - mandatory
                left_lower_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })


        //COXA ESQUERDA
        let leftUpperLegTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/2 }, 388)
            .onUpdate(function(){
                //Parte análoga à movimentação do braço e antebraço, seguindo a ideia da perna e coxa.
                let left_upper_leg =  robot.getObjectByName("left_upper_leg");                               
                left_upper_leg.matrix.makeRotationZ(this._object.theta)
                .multiply( new THREE.Matrix4().makeTranslation(0, -0.5, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(0, -3.2, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(1.1, 0, 0 )); 

                // Updating final world matrix (with parent transforms) - mandatory
                left_upper_leg.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

        
        //PERNA ESQUERDA
        let leftLowerLegTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/2 }, 388)
        .onUpdate(function(){
            //Parte análoga à movimentação do braço e antebraço, seguindo a ideia da perna e coxa.
            let left_lower_leg =  robot.getObjectByName("left_lower_leg");                               
            left_lower_leg.matrix.makeRotationZ(this._object.theta)
            .multiply( new THREE.Matrix4().makeTranslation(0, -0.5, 0 ))                              
            .premultiply( new THREE.Matrix4().makeTranslation(0, -2.0, 0 ))
            .premultiply( new THREE.Matrix4().makeTranslation(-0.4, 0, 0 )); 

            // Updating final world matrix (with parent transforms) - mandatory
            left_lower_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })

        //PERNA DIREITA
        let rightLowerLegTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:Math.PI/36 }, 500)
        .onUpdate(function(){
            //Parte análoga à movimentação do braço e antebraço, seguindo a ideia da perna e coxa.
            let right_lower_leg =  robot.getObjectByName("right_lower_leg");                               
            right_lower_leg.matrix.makeRotationZ(this._object.theta)
            .multiply( new THREE.Matrix4().makeTranslation(0, -0.5, 0 ))                              
            .premultiply( new THREE.Matrix4().makeTranslation(0, -2.0, 0 ))
            .premultiply( new THREE.Matrix4().makeTranslation(0.1, 0, 0 )); 

            // Updating final world matrix (with parent transforms) - mandatory
            right_lower_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
            })



        // TORSO
        let torsoTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:Math.PI/6 }, 377)
        .onUpdate(function(){
            let torso =  robot.getObjectByName("torso");                               
            torso.matrix.makeRotationZ(-this._object.theta)            
            .premultiply( new THREE.Matrix4().makeTranslation(0, 0, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            torso.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })
            
    
        
        //  upperArmTween.chain( ... ); this allows other related Tween animations occur at the same time
        // Não foi necessário mover o antebraço direito nessa animação
        upperArmTween.start();        
        //rightLowerArmTween.start();
        leftUpperArmTween.start(); 
        leftLowerArmTween.start();
        leftUpperLegTween.start();
        //rightUpperLegTween.start();
        leftLowerLegTween.start();
        rightLowerLegTween.start();
        
        torsoTween.start();     
    },
    animate: function(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        TWEEN.update(time);
    },
    run: function() {
        this.init();
        this.animate(0);
    }
    
});




