/*
Essa animação imita a pose do famoso corredor jamaicano Usain Bolt. Ele costuma fazer essa pose no final
de suas corridas. Para referência:
https://cdn.images.express.co.uk/img/dynamic/4/590x/Usain-Bolt-celebration-835724.jpg

O tempo de animação dos braços e torso é maior, tentando simular a forma como o próprio corredor faz o movimento
*/

function UsainBoltAnimation() {}

Object.assign( UsainBoltAnimation.prototype, {

    init: function() {
        //BRAÇO DIREITO
        let upperArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/1.8 }, 1500)
            .onUpdate(function(){
                /*  Rotação do BRAÇO direito
                    Lê-se o premultiply de trás para a frente. Acontecendo a seguinte sequência de eventos:
                    Desloca-se o braço para o "ponto do ombro", depois para o lado, faz a rotação e então recoloca o braço
                    no lugar
                    Os valores corretos foram alcançados com teste dependendo da movimentação desejada    */          
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");                               
                right_upper_arm.matrix.makeRotationZ(this._object.theta)
                .multiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(-0.5, 2, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(2.6, 0, 0 ));

                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })    
        
        //MÃO DIREITA
        let rightHandTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/2 }, 1500)
        .onUpdate(function(){
            //O movimento da mão é mais simples, dado que não é preciso mudar o pivô dela pra lugar algum devido ao seu formato
            let right_hand =  robot.getObjectByName("right_hand");                               
            right_hand.matrix.makeRotationZ(this._object.theta)            
            .premultiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            right_hand.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })
        
        //BRAÇO ESQUERDO
        let leftUpperArmTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/2.2 }, 1800)
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
            .to( {theta:Math.PI/1.2 }, 1800)
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

        //MÃO ESQUERDA
        let leftHandTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/2 }, 1800)
        .onUpdate(function(){
            //O movimento da mão é mais simples, dado que não é preciso mudar o pivô dela pra lugar algum devido ao seu formato
            let left_hand =  robot.getObjectByName("left_hand");                               
            left_hand.matrix.makeRotationZ(this._object.theta)            
            .premultiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            left_hand.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })

        //COXA ESQUERDA
        let leftUpperLegTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/8.2 }, 500)
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

        //COXA DIREITA
        let rightUpperLegTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:-Math.PI/7 }, 500)
            .onUpdate(function(){
                //Parte análoga à movimentação do braço e antebraço, seguindo a ideia da perna e coxa
                let right_upper_leg =  robot.getObjectByName("right_upper_leg");                               
                right_upper_leg.matrix.makeRotationZ(this._object.theta)
                .multiply( new THREE.Matrix4().makeTranslation(0, -0.5, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(0, -3.2, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(-1.1, 0, 0 )); 

                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_leg.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })
        
        //PERNA ESQUERDA
        let leftLowerLegTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/7 }, 500)
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

        //PÉ ESQUERDO
        let leftFootTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/8 }, 500)
        .onUpdate(function(){
            //O movimento do pé mais simples, dado que não é preciso mudar o pivô dele para lugar algum devido ao seu formato
            let left_foot =  robot.getObjectByName("left_foot");                               
            left_foot.matrix.makeRotationZ(this._object.theta)            
            .premultiply( new THREE.Matrix4().makeTranslation(0.1, -2.6, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            left_foot.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })


        // TORSO
        let torsoTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:Math.PI/10 }, 1000)
        .onUpdate(function(){
            //O movimento da mão é mais simples, dado que não é preciso mudar o pivô dela pra lugar algum devido ao seu formato
            let torso =  robot.getObjectByName("torso");                               
            torso.matrix.makeRotationZ(this._object.theta)            
            .premultiply( new THREE.Matrix4().makeTranslation(0, -2, 0 ));

            // Updating final world matrix (with parent transforms) - mandatory
            torso.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })
            
    
        
        //  upperArmTween.chain( ... ); this allows other related Tween animations occur at the same time
        // Não foi necessário mover o antebraço direito nessa animação
        upperArmTween.start();        
        rightHandTween.start();
        leftUpperArmTween.start(); 
        leftLowerArmTween.start();
        leftHandTween.start();
        leftUpperLegTween.start();
        rightUpperLegTween.start();
        leftLowerLegTween.start();
        rightLowerLegTween.start();
        leftFootTween.start();
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




