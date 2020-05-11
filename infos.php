<!DOCTYPE html>
<html>

    <!-- HEAD -->
    <head>
        <meta charset="utf-8">
        <title>CoroCount</title>

        <!-- CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
        <link rel="stylesheet" href="src/css/infos.css">
        <!-- CSS -->

        <!-- FONT -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/33cdb3ea1d.js" crossorigin="anonymous"></script>
        <!-- FONT -->

        <!-- META SEO -->
        <meta name="description" content="Site de vente de bijoux en ligne ! PRIMORDIAL : bijoux">
        <meta name="keywords" content="bijoux, jewel, boucle d'oreil, colier, bracelet">
        <!-- META SEO -->
    </head>
    <!-- HEAD -->


    <!-- BODY -->
    <body class="body">
        <!-- header -->
        <?php include('src/ext/header.php') ?>
        <!-- header -->

        <!-- progressbar -->
        <div id="progressbar" class="progressbar">
            <div class="spinner-box">
                <div class="solar-system">
                    <div class="earth-orbit orbit">
                        <div class="planet earth"></div>
                        <div class="venus-orbit orbit">
                            <div class="planet venus"></div>
                            <div class="mercury-orbit orbit">
                                <div class="planet mercury"></div>
                                <div class="sun"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- progressbar -->

        <div class="diap1"></div>

        <!-- title -->
        <h1 class="title">Informations et recommandation</h1>
        <!-- title -->

        <div class="diap2"></div>

        <!-- cards -->
        <div class="cards">
            <div class="card-1">
                <div>
                    <img class="img img1" src="src/img/virus.png">
                    <div class="txt-1">
                        <p class="txt txt1">
                            Les coronavirus sont une famille de virus, qui provoquent des maladies allant d’un simple rhume (certains virus saisonniers sont des coronavirus) à des pathologies plus sévères 
                            comme le MERS-CoV ou le SRAS.
                            Le virus identifié en janvier 2020 en Chine est un nouveau coronavirus, nommé SARS-CoV-2. La maladie provoquée par ce coronavirus a été nommée COVID-19 par l’Organisation mondiale 
                            de la Santé - OMS. Depuis le 11 mars 2020, l’OMS qualifie la situation mondiale du COVID-19 de pandémie ; c’est-à-dire que l’épidémie est désormais mondiale.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-2">
                <div>
                    <img class="img img2" src="src/img/headache.png">
                    <p class="txt txt2">
                        Les symptômes principaux sont la fièvre ou la sensation de fièvre et la toux.
                        La perte brutale de l’odorat, sans obstruction nasale et disparition totale du goût sont également des symptômes qui ont été observés chez les malades.
                        Chez les personnes développant des formes plus graves, on retrouve des difficultés respiratoires, pouvant mener jusqu’à une hospitalisation en réanimation et au décès.
                    </p>
                </div>
            </div>
            <div class="card-3">
                <div>
                    <img class="img img3" src="src/img/14days.png">
                    <p class="txt txt3">
                        Le délai d’incubation est la période entre la contamination et l’apparition des premiers symptômes. Le délai d’incubation du coronavirus COVID-19 est de 3 à 5 jours en général, 
                        il peut toutefois s’étendre jusqu’à 14 jours. Pendant cette période, le sujet peut être contagieux: il peut être porteur du virus avant l’apparition des symptômes ou à l’apparition 
                        de signaux faibles.
                    </p>
                </div>
            </div>
            <div class="card-4">
                <div>
                    <img class="img img4" src="src/img/cough.png">
                    <p class="txt txt4">
                        La maladie se transmet par les gouttelettes (sécrétions projetées invisibles lors d’une discussion, d’éternuements ou de la toux). On considère donc qu’un contact étroit avec une personne malade est nécessaire pour transmettre la maladie : 
                        même lieu de vie, contact direct à moins d’un mètre lors d’une discussion, d’une toux, d’un éternuement ou en l’absence de mesures de protection.
                        Un des autres vecteurs privilégiés de la transmission du virus est le contact des mains non lavées souillées par des gouttelettes.
                    </p>
                </div>
            </div>
            <div class="card-5">
                <div>
                    <img class="img img5" src="src/img/washing.png">
                    <p class="txt txt5">
                        C’est donc pourquoi les gestes barrières et les mesures de distanciation sociale sont indispensables pour se protéger de la maladie : Lavez-vous très régulièrement les mains, toussez ou éternuez dans votre coude ou dans un mouchoir. Saluez sans se serrer la main, évitez les embrassades. Utilisez un mouchoir à usage unique et jetez-le.
                    </p>
                </div>
            </div>
        </div>
        <!-- cards -->

        <!-- diap -->
        <div class="diap"></div>
        <!-- diap -->

        <!-- JS -->
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="src/js/infos.js"></script>
        <!-- JS -->
    </body>
    <!-- BODY -->