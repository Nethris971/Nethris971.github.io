<!DOCTYPE html>
<html>

    <!-- HEAD -->
    <head>
        <meta charset="utf-8">
        <title>CoroCount</title>

        <!-- CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
        <link rel="stylesheet" href="src/css/main.css">
        <!-- CSS -->

        <!-- FONT -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/33cdb3ea1d.js" crossorigin="anonymous"></script>
        <!-- FONT -->

        <!-- META SEO -->
        <meta name="description" content="Tout savoir sur le Coronavirus dans le monde !">
        <meta name="keywords" content="coronavirus, covid, 19, sras, compteur">
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
                    <h1 class="title is-1">Bienvenue sur CoroCount</h1>
                    <h2 class="subtitle">Tout savoir sur le Coronavirus dans le monde !</h2>
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
        <h2 class="subtitle heading-site">Totaux Mondiaux</h2>
        <div class="divider-tbl">
            <div class="itm1"></div>
            <i class="fa fa-virus itm3" style="color: #fff; text-align: center;"></i>
            <div class="itm2"></div>
        </div>
        <h3 id="maj" class="subsub">Dernière maj</h3>
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

        <!-- Tableau -->
        <h1 class="subtitle heading-site1">Tableau classé par nombre de cas</h1>
        <div class="divider-tbl">
            <div class="itm11"></div>
            <i class="fa fa-virus itm3" style="color: #fff; text-align: center;"></i>
            <div class="itm21"></div>
        </div>
        <section>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th style="color: #fff">Pays</th>
                    <th style="color: #fff">Confirmés</th>
                    <th style="color: #fff">Décès</th>
                    <th style="color: #fff">Guéris</th>
                    <th style="color: #fff">Actifs</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                    <td id="tbl1-c"></td>
                    <td id="tbl1-ca"></td>
                    <td id="tbl1-d"></td>
                    <td id="tbl1-r"></td>
                    <td id="tbl1-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl2-c"></td>
                    <td id="tbl2-ca"></td>
                    <td id="tbl2-d"></td>
                    <td id="tbl2-r"></td>
                    <td id="tbl2-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl3-c"></td>
                    <td id="tbl3-ca"></td>
                    <td id="tbl3-d"></td>
                    <td id="tbl3-r"></td>
                    <td id="tbl3-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl4-c"></td>
                    <td id="tbl4-ca"></td>
                    <td id="tbl4-d"></td>
                    <td id="tbl4-r"></td>
                    <td id="tbl4-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl5-c"></td>
                    <td id="tbl5-ca"></td>
                    <td id="tbl5-d"></td>
                    <td id="tbl5-r"></td>
                    <td id="tbl5-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl6-c"></td>
                    <td id="tbl6-ca"></td>
                    <td id="tbl6-d"></td>
                    <td id="tbl6-r"></td>
                    <td id="tbl6-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl7-c"></td>
                    <td id="tbl7-ca"></td>
                    <td id="tbl7-d"></td>
                    <td id="tbl7-r"></td>
                    <td id="tbl7-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl8-c"></td>
                    <td id="tbl8-ca"></td>
                    <td id="tbl8-d"></td>
                    <td id="tbl8-r"></td>
                    <td id="tbl8-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl9-c"></td>
                    <td id="tbl9-ca"></td>
                    <td id="tbl9-d"></td>
                    <td id="tbl9-r"></td>
                    <td id="tbl9-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl10-c"></td>
                    <td id="tbl10-ca"></td>
                    <td id="tbl10-d"></td>
                    <td id="tbl10-r"></td>
                    <td id="tbl10-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl11-c"></td>
                    <td id="tbl11-ca"></td>
                    <td id="tbl11-d"></td>
                    <td id="tbl11-r"></td>
                    <td id="tbl11-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl12-c"></td>
                    <td id="tbl12-ca"></td>
                    <td id="tbl12-d"></td>
                    <td id="tbl12-r"></td>
                    <td id="tbl12-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl13-c"></td>
                    <td id="tbl13-ca"></td>
                    <td id="tbl13-d"></td>
                    <td id="tbl13-r"></td>
                    <td id="tbl13-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl14-c"></td>
                    <td id="tbl14-ca"></td>
                    <td id="tbl14-d"></td>
                    <td id="tbl14-r"></td>
                    <td id="tbl14-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl15-c"></td>
                    <td id="tbl15-ca"></td>
                    <td id="tbl15-d"></td>
                    <td id="tbl15-r"></td>
                    <td id="tbl15-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl16-c"></td>
                    <td id="tbl16-ca"></td>
                    <td id="tbl16-d"></td>
                    <td id="tbl16-r"></td>
                    <td id="tbl16-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl17-c"></td>
                    <td id="tbl17-ca"></td>
                    <td id="tbl17-d"></td>
                    <td id="tbl17-r"></td>
                    <td id="tbl17-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl18-c"></td>
                    <td id="tbl18-ca"></td>
                    <td id="tbl18-d"></td>
                    <td id="tbl18-r"></td>
                    <td id="tbl18-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl19-c"></td>
                    <td id="tbl19-ca"></td>
                    <td id="tbl19-d"></td>
                    <td id="tbl19-r"></td>
                    <td id="tbl19-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl20-c"></td>
                    <td id="tbl20-ca"></td>
                    <td id="tbl20-d"></td>
                    <td id="tbl20-r"></td>
                    <td id="tbl20-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl21-c"></td>
                    <td id="tbl21-ca"></td>
                    <td id="tbl21-d"></td>
                    <td id="tbl21-r"></td>
                    <td id="tbl21-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl22-c"></td>
                    <td id="tbl22-ca"></td>
                    <td id="tbl22-d"></td>
                    <td id="tbl22-r"></td>
                    <td id="tbl22-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl23-c"></td>
                    <td id="tbl23-ca"></td>
                    <td id="tbl23-d"></td>
                    <td id="tbl23-r"></td>
                    <td id="tbl23-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl24-c"></td>
                    <td id="tbl24-ca"></td>
                    <td id="tbl24-d"></td>
                    <td id="tbl24-r"></td>
                    <td id="tbl24-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl25-c"></td>
                    <td id="tbl25-ca"></td>
                    <td id="tbl25-d"></td>
                    <td id="tbl25-r"></td>
                    <td id="tbl25-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl26-c"></td>
                    <td id="tbl26-ca"></td>
                    <td id="tbl26-d"></td>
                    <td id="tbl26-r"></td>
                    <td id="tbl26-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl27-c"></td>
                    <td id="tbl27-ca"></td>
                    <td id="tbl27-d"></td>
                    <td id="tbl27-r"></td>
                    <td id="tbl27-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl28-c"></td>
                    <td id="tbl28-ca"></td>
                    <td id="tbl28-d"></td>
                    <td id="tbl28-r"></td>
                    <td id="tbl28-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl29-c"></td>
                    <td id="tbl29-ca"></td>
                    <td id="tbl29-d"></td>
                    <td id="tbl29-r"></td>
                    <td id="tbl29-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl30-c"></td>
                    <td id="tbl30-ca"></td>
                    <td id="tbl30-d"></td>
                    <td id="tbl30-r"></td>
                    <td id="tbl30-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl31-c"></td>
                    <td id="tbl31-ca"></td>
                    <td id="tbl31-d"></td>
                    <td id="tbl31-r"></td>
                    <td id="tbl31-a"></td>
                    </tr>
                    <tr>
                    <td id="tbl32-c"></td>
                    <td id="tbl32-ca"></td>
                    <td id="tbl32-d"></td>
                    <td id="tbl32-r"></td>
                    <td id="tbl32-a"></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>

        <!-- Tableau -->

        <div class="enbas">

        </div>

        <!-- copyrights -->
        <!-- Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
        <!-- <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@kalimullin?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ilnur Kalimullin"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Ilnur Kalimullin</span></a> -->
        <!-- <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@fusion_medical_animation?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Fusion Medical Animation"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Fusion Medical Animation</span></a> -->
        <!-- <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@paulgilmore_?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Paul Gilmore"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Paul Gilmore</span></a> -->
        <!-- copyrights -->

        <!-- JS -->
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="src/js/moment.min.js"></script>
        <script src="src/js/main.js"></script>

    </body>
    <!-- BODY -->
</html>