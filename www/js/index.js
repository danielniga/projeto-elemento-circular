var app = {
    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {

        let raio;
        let angulo;
        let areaCirculo;
        let areaSeguimentoCircular;
        let comprimentoCincunferencia;
        let arcoAB;
        let raioR;
        let cordaW;
        let flechaF;
        let valorX;
        let valorY;
        let folha;
        let context;
        let lista;

        folha = document.getElementById('folha');
        context = folha.getContext('2d');


        lista = document.getElementById('lista');
        lista.value = "1";
        LISTA();
        lista.addEventListener('change', function (e) {
            e.preventDefault();
            LISTA();
        });

        let Botao = document.getElementById('btn');
        Botao.addEventListener('click', function (e) {
            e.preventDefault();


            BOTAO();
        });




        function FIGURA() {

            context.clearRect(0, 0, folha.width, folha.height);
            context.beginPath();
            context.lineWidth = 4;
            context.lineCap = "round";
            context.strokeStyle = 'rgba(11, 156, 247, 0.98)';
            context.arc(154, 154, 150, 0, Math.PI * 2);


            context.moveTo(154, 154);
            context.lineTo(47.934, 47.934);

            context.moveTo(154, 154);
            context.lineTo(260.066, 47.934);

            context.moveTo(47.934, 47.934);
            context.lineTo(260.066, 47.934);

            context.moveTo(154, 154);
            context.lineTo(260.066, 260.066);

            context.moveTo(154, 154);
            context.lineTo(154, 4);

            context.moveTo(207.033, 47.934);
            context.lineTo(207.033, 13.6878);


            context.stroke();



        }
        //  FIGURA();
        /*
         context.lineCap = "butt" = pontas das retas quadradas menores; 
         context.lineCap = "round" = pontas das retas redonda; 
         context.lineCap = "square" = pontas das retas quadradas passante; 
    
        */






        function LISTA() {
            if (lista.value == "1") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "none";
                document.getElementById('lblAngulo').style.display = "none";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA();
                context.beginPath();
                context.lineWidth = 4;
                context.lineCap = "round";
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.arc(154, 154, 150, 0, Math.PI * 2);
                context.stroke();
                context.beginPath();

                context.lineWidth = 4;
                context.fillStyle = 'rgba(177, 245, 157, 0.67)';
                context.arc(154, 154, 150, 0, Math.PI * 2);
                context.fill();

                document.getElementById('img').src = "img/S.JPG";

            } else if (lista.value == "2") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "block";
                document.getElementById('lblAngulo').style.display = "block";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";

                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.lineWidth = 4;
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.arc(154, 154, 150, Math.PI * (1.5 - (2 / 8)), Math.PI * (1.5 + (2 / 8)));
                context.lineTo(47.934, 47.934, 47.934);
                context.stroke();

                context.fillStyle = 'rgba(177, 245, 157, 0.67)';
                context.arc(154, 154, 150, Math.PI * (1.5 - (2 / 8)), Math.PI * (1.5 + (2 / 8)));
                context.lineTo(47.934, 47.934, 47.934);
                context.fill();

                document.getElementById('img').src = "img/SS.JPG";

            } else if (lista.value == "3") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "none";
                document.getElementById('lblAngulo').style.display = "none";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA();
                context.beginPath();
                context.lineWidth = 4;
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.arc(154, 154, 150, 0, Math.PI * 2);
                context.stroke();

                document.getElementById('img').src = "img/C.JPG";

            } else if (lista.value == "4") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "block";
                document.getElementById('lblAngulo').style.display = "block";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.lineWidth = 4;
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.arc(154, 154, 150, Math.PI * (1.5 - (2 / 8)), Math.PI * (1.5 + (2 / 8)));

                context.stroke();

                document.getElementById('img').src = "img/AB.JPG";

            } else if (lista.value == "5") {
                document.getElementById('raio').style.display = "none";
                document.getElementById('lblRaio').style.display = "none";

                document.getElementById('angulo').style.display = "none";
                document.getElementById('lblAngulo').style.display = "none";

                document.getElementById('corda').style.display = "block";
                document.getElementById('lblCorda').style.display = "block";

                document.getElementById('flecha').style.display = "block";
                document.getElementById('lblFlecha').style.display = "block";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.moveTo(154, 154);
                context.lineTo(260.066, 47.934);
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.stroke();

                document.getElementById('img').src = "img/RAIO.JPG";

            } else if (lista.value == "6") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "block";
                document.getElementById('lblAngulo').style.display = "block";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.moveTo(47.934, 47.934);
                context.lineTo(260.066, 47.934);
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.stroke();

                document.getElementById('img').src = "img/CORDA.JPG";

            } else if (lista.value == "7") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "block";
                document.getElementById('lblAngulo').style.display = "block";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "none";
                document.getElementById('lblFlecha').style.display = "none";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.moveTo(154, 47.934);
                context.lineTo(154, 4);
                context.stroke();

                document.getElementById('img').src = "img/FLECHA.JPG";

            } else if (lista.value == "8") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "none";
                document.getElementById('lblAngulo').style.display = "none";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "block";
                document.getElementById('lblFlecha').style.display = "block";

                document.getElementById('valorX').style.display = "none";
                document.getElementById('lblValorX').style.display = "none";

                document.getElementById('valorY').style.display = "block";
                document.getElementById('lblValorY').style.display = "block";


                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.moveTo(154, 47.934);
                context.lineTo(207.033, 47.934);
                context.stroke();

                document.getElementById('img').src = "img/X.JPG";

            } else if (lista.value == "9") {
                document.getElementById('raio').style.display = "block";
                document.getElementById('lblRaio').style.display = "block";

                document.getElementById('angulo').style.display = "none";
                document.getElementById('lblAngulo').style.display = "none";

                document.getElementById('corda').style.display = "none";
                document.getElementById('lblCorda').style.display = "none";

                document.getElementById('flecha').style.display = "block";
                document.getElementById('lblFlecha').style.display = "block";

                document.getElementById('valorX').style.display = "block";
                document.getElementById('lblValorX').style.display = "block";

                document.getElementById('valorY').style.display = "none";
                document.getElementById('lblValorY').style.display = "none";

                context.clearRect(0, 0, folha.width, folha.height);
                FIGURA()
                context.beginPath();
                context.strokeStyle = 'rgba(247, 11, 11, 0.98)';
                context.moveTo(207.033, 47.934);
                context.lineTo(207.033, 13.6878);
                context.stroke();

                document.getElementById('img').src = "img/Y.JPG";
            }
        }


        function BOTAO() {
            let raio = Number(document.getElementById('raio').value);

            let angulo = Number(document.getElementById('angulo').value);

            let cordaW = Number(document.getElementById('corda').value);
            let flechaF = Number(document.getElementById('flecha').value);

            let valorX = Number(document.getElementById('valorX').value);
            let valorY = Number(document.getElementById('valorY').value);

            let valorLblResul = document.getElementById('lblResul');
            let lista = document.getElementById('lista');
            if (lista.value == "1") {

                if (raio != '') {
                    areaCirculo = Math.PI * (Math.pow(raio, 2));
                    valorLblResul.innerHTML = "ÁREA DO CÍRCULO <br>" + areaCirculo.toFixed(6);
                } else {

                    alert("DEFINA O VALOR DO RAIO");
                }


            } else if (lista.value == "2") {

                if (raio != '' && angulo != '') {
                    areaSeguimentoCircular = (0.5 * Math.pow(raio, 2)) * ((Math.PI * (angulo / 180)) - (Math.sin(angulo * (Math.PI / 180))));
                    valorLblResul.innerHTML = "ÁREA DO SEGUIMENTO CIRCULAR <br>" + areaSeguimentoCircular.toFixed(6);
                } else {

                    alert("VALOR DO RAIO OU ÂNGULO NÃO DEFINIDOS");
                }



            } else if (lista.value == "3") {

                if (raio != '') {
                    comprimentoCincunferencia = 2 * Math.PI * raio;
                    valorLblResul.innerHTML = "COMPRIMENTO DA CIRCUNFERÊNCIA <br>" + comprimentoCincunferencia.toFixed(6);
                } else {

                    alert("DEFINA O VALOR DO RAIO");
                }



            } else if (lista.value == "4") {

                if (raio != '' && angulo != '') {
                    arcoAB = (Math.PI * raio * angulo) / 180;
                    valorLblResul.innerHTML = "ARCO AB <br>" + arcoAB.toFixed(6);
                } else {

                    alert("VALOR DO RAIO OU ÂNGULO NÃO DEFINIDOS");
                }



            } else if (lista.value == "5") {

                if (flechaF != '' && cordaW != '') {
                    raioR = ((4 * Math.pow(flechaF, 2)) + Math.pow(cordaW, 2)) / (8 * flechaF);
                    valorLblResul.innerHTML = "RAIO <br>" + raioR.toFixed(6);
                } else {

                    alert("VALOR DA FLECHA OU CORDA NÃO DEFINIDOS");
                }


            } else if (lista.value == "6") {

                if (raio != '' && angulo != '') {
                    cordaW = 2 * raio * ((Math.sin((angulo / 2) * (Math.PI / 180))));
                    valorX = cordaW / 4;
                    valorLblResul.innerHTML = "CORDA <br>" + cordaW.toFixed(6);
                } else {

                    alert("VALOR DO RAIO OU ÂNGULO NÃO DEFINIDOS");
                }


            } else if (lista.value == "7") {

                if (raio != '' && angulo != '') {
                    flechaF = 2 * raio * Math.pow(Math.sin((angulo / 4) * (Math.PI / 180)), 2);
                    valorLblResul.innerHTML = "FLECHA <br>" + flechaF.toFixed(6);
                } else {

                    alert("VALOR DO RAIO OU ÂNGULO NÃO DEFINIDOS");
                }




            } else if (lista.value == "8") {
                if (raio != '' && valorY != '' && flechaF != '') {
                    valorX = Math.sqrt(Math.pow(raio, 2) - Math.pow((raio + valorY - flechaF), 2));
                    valorLblResul.innerHTML = "VALOR X <br>" + valorX.toFixed(6);
                } else {

                    alert("VALOR DO RAIO, FLECHA OU VOLOR Y NÃO DEFINIDOS");
                }


            } else if (lista.value == "9") {
                if (raio != '' && valorX != '' && flechaF != '') {
                    valorY = flechaF - raio + (Math.sqrt(Math.pow(raio, 2) - Math.pow(valorX, 2)));
                    valorLblResul.innerHTML = "VALOR Y <br>" + valorY.toFixed(6);
                } else {

                    alert("VALOR DO RAIO, FLECHA OU VOLOR X NÃO DEFINIDOS");
                }

            }
        }







    }
};
