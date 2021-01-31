function WaveAnimation() {}

Object.assign( WaveAnimation.prototype, {
 
    init: function() {
        //BRAÇO
        let upperArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/2 }, 500)
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

        //ANTEBRAÇO
        let lowerArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/2 }, 500)
            .onUpdate(function(){
                //Parte análoga à movimentação do braço, mas para o antebraço
                let right_lower_arm =  robot.getObjectByName("right_lower_arm");                               
                right_lower_arm.matrix.makeRotationZ(this._object.theta)
                .multiply( new THREE.Matrix4().makeTranslation(-0.6, 0, 0 ))                              
                .premultiply( new THREE.Matrix4().makeTranslation(0, -1.3, 0 ))
                .premultiply( new THREE.Matrix4().makeTranslation(1.2, -0.5, 0 )); 

                // Updating final world matrix (with parent transforms) - mandatory
                right_lower_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

        //MÃO
        let rightHandTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:-Math.PI/8 }, 500)
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
            
    
        
        //  upperArmTween.chain( ... ); this allows other related Tween animations occur at the same time
        upperArmTween.start();
        lowerArmTween.start();
        rightHandTween.start();      
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






