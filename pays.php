<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CoroCount | Pays</title>
        <!-- CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="src/css/notyf.min.css">
        <link rel="stylesheet" href="src/css/pays.css">
        <!-- CSS -->

        <!-- FONT -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/33cdb3ea1d.js" crossorigin="anonymous"></script>
        <!-- FONT -->

        <!-- META SEO -->
        <meta name="description" content="Site de vente de bijoux en ligne ! PRIMORDIAL : bijoux">
        <meta name="keywords" content="bijoux, jewel, boucle d'oreil, colier, bracelet">
        <meta name="viewport" content="width=device-width, user=scalable=no, initaial-scale=1">
        <!-- META SEO -->
    </head>

    <body class="body">
        
        <!-- HEADER -->
        <?php include('src/ext/header.php') ?>
        <!-- HEADER -->

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

        <!-- banner -->
        <div class="block">
            <div class="banner">
                <img src="src/img/bg.jpg" alt="Modélisation du SARS CoV-2" class="banner-image">
                <div class="banner-content">
                    <div class="divider2">
                        <div class="divider2-item1"></div>
                        <i class="fa fa-virus" style="color: #fff; text-align: center;"></i>
                        <div class="divider2-item2"></div>
                    </div>
                    <h1 id="CountryName" class="title is-1">Bienvenue sur CoroCount</h1>
                    <h2 id="CountrySub" class="subtitle">Tout savoir sur le Coronavirus dans le monde !</h2>
                    <div class="divider">
                        <div class="divider-item1"></div>
                        <i class="fa fa-virus" style="color: #fff; text-align: center;"></i>
                        <div class="divider-item2"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- banner -->

        <!-- columns -->
        <div class="block">
        <h2 class="subtitle heading-site">Total du Pays</h2>
        <div class="divider-tbl">
            <div class="itm1"></div>
            <i class="fa fa-virus itm3" style="color: #fff; text-align: center;"></i>
            <div class="itm2"></div>
        </div>
            <div class="containertotal">
                <div class="totalsValue">
                    <div class="btn btn1">
                        <span class="tooltip">Nombre de cas confirmés</span>
                        <i class="fas fa-plus" style="color: #fff"></i>
                        <span id="CovidNewCases" class="newconfirmed">+0</span>
                    </div>
                    <p class="name">Confirmés</p>
                    <p id="CovidCases" class="nbr">0</p>
                </div>
                <div class="totalsValue">
                    <div class="btn btn2">
                        <span class="tooltip">Nombre de cas guéris</span>
                        <i class="fas fa-check" style="color: #fff"></i>
                    </div>
                    <p class="name">Guéris</p>
                    <p id="CovidRecovered" class="nbr">0</p>
                </div>
                <div class="totalsValue">
                    <div class="btn btn3">
                        <span class="tooltip">Nombre de cas critiques</span>
                        <i class="fas fa-exclamation" style="color: #fff"></i>
                    </div>
                    <p class="name">Critiques</p>
                    <p id="CovidCritical" class="nbr">0</p>
                </div>
                <div class="totalsValue">
                    <div class="btn btn4">
                        <span class="tooltip">Nombre de cas décedés</span>
                        <i class="fas fa-times" style="color: #fff"></i>
                        <span id="CovidNewDeaths" class="newdeaths">+0</span>
                    </div>
                    <p class="name">Décès</p>
                    <p id="CovidDeaths" class="nbr">0</p>
                </div>
            </div>
        </div>
        <!-- columns -->

        <!-- cards -->
        <div class="block">
            <div class="cards">
                <div class="card-1">
                    <div class="card header1">
                        <h1 class="ca">Cas Actifs</h1>
                    </div>
                    <div class="contenu1">
                        <h1 id="CovidActive" class="contenu1 t">0</h1>
                        <p class="contenu1 p">Patients actuellement infectés</p>
                        <p id="CovidMild" class="contenu1 p2">0% de cas légers</p>
                        <p id="CovidACritical" class="contenu1 p3">0% de cas critiques</p>
                    </div>
                </div>
                <div class="card-2">
                <div class="card header2">
                    <h1 class="cp">Cas Passifs</h1>
                </div>
                <div class="contenu2">
                    <h1 id="CovidDesactive" class="contenu2 t">0</h1>
                    <p class="contenu2 p">Patients désinfectés</p>
                    <p id="CovidARecovered" class="contenu2 p2">0% de guéris</p>
                    <p id="CovidADeaths" class="contenu2 p3">0% de décès</p>
                </div>
                </div>
            </div>
        </div>
        <!-- cards -->

        <!-- separation -->
        <div class="separation"></div>
        <!-- separation -->




        <!-- JS -->
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="src/js/notyf.min.js" type="text/javascript"></script>
        <script src="src/js/pays.js"></script>

    </body>
</html>