    theme = app.CreateTheme( "Light" );
    theme.AdjustColor( 35, 0, -10 );
    theme.SetBackColor( "#78FFD8" );
    theme.SetBtnTextColor( "black" );
    theme.SetButtonOptions( "custom" );
    theme.SetButtonStyle( "white","white",2,"#999999",0,1,"#ff9000" );
    theme.SetCheckBoxOptions( "dark" );
    theme.SetTextEditOptions( "underline" );
    theme.SetDialogColor( "#ffffffff" );
    theme.SetDialogBtnColor( "#ffeeeeee" );
    theme.SetDialogBtnTxtColor( "#ff666666" );
    theme.SetTitleHeight( 42 );
    theme.SetTitleColor( "#ff888888" ); 
    theme.SetTitleDividerColor( "#ff0099CC" );
    theme.SetTextColor( "#ff666666" );
    app.SetTheme( theme );

var color = "#6DE7C3"

function OnStart() {
    app.SetStatusBarColor( "#78FFD8" );
    app.SetNavBarColor( "#78FFD8" );

    app.PreventScreenLock(true);
	app.SetOrientation("Portrait");  
    app.EnableBackKey( false );

	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
    layMain = app.CreateLayout( "Linear", "VCenter" );
    layMain.SetSize( 1, app.IsPortrait()?0.92:0.85 )
    lay.AddChild( layMain );
    
	var ver = app.GetVersion();
	app.GA( "create", "UA-1234567890-1" );
	app.GA( "send", "screenview", 
	    {"appName":"AlienChat","appVersion":ver,"screenName":"main"});


	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
	web = app.CreateWebView( 1.0, 1.0 );
	web.SetOnProgress( web_OnProgess );
	web.LoadUrl( "index.html" );
	lay.AddChild( web );
	
	layHoriz = app.CreateLayout( "linear", "Horizontal" );	
	
	app.AddLayout( lay );
	
	
	CreateDrawer();
	app.AddLayout( lay );
	app.AddDrawer( drawerScroll, "Left", drawerWidth );


app.SetOnError(OnError);
}

function OnError( msg, line, file ) {
    var text =
    'Message: "' + msg + '"\n' +
    'Line: ' + line + '\n' +
    'File: "' + app.Uri2Path(file) + '"';
    
    console.log( text, "Received error message:" );
}



function OnBack() {
    if( web.CanGoBack()) {
        web.Back();
        } else {
            var sino = app.CreateYesNoDialog( "¿Desea salir de AlienChat?" );
            sino.SetButtonText( "Si","No" );
            sino.SetOnTouch(function(result){ if(result=="Yes") app.Exit(); } );
            sino.Show();
            }
            
            function yesNo_OnTouch( result ) {
                if( result=="Yes" ) app.Exit();
                }
            }

function web_OnProgess( progress ) {
	app.Debug( "progress = " + progress );
	if( progress==100 ) app.HideProgress();
}

function CreateDrawer() {
	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" );
    drawerScroll.SetBackColor( color );
	layDrawer = app.CreateLayout( "Linear", "Left" );
	drawerScroll.AddChild( layDrawer );
	
	layDrawerTop = app.CreateLayout( "Absolute" );
	layDrawerTop.SetBackground( "Img/aa.png" );
	layDrawerTop.SetSize( drawerWidth, 0.23 );
	layDrawer.AddChild( layDrawerTop );
	
	var img = app.CreateImage( "Img/AlienChat.png", 0.15 );
	img.SetPosition( drawerWidth*0.06, 0.04 );
	layDrawerTop.AddChild( img );
	
	var txtUser = app.CreateText( "AlienChat",-1,-1,"Bold");
	txtUser.SetPosition( drawerWidth*0.07, 0.155 );
	txtUser.SetTextColor( "White" );
	txtUser.SetTextSize( 25.7, "dip" );
	layDrawerTop.AddChild( txtUser );
	
	
	var layMenu = app.CreateLayout( "Linear", "Left" );
	layDrawer.AddChild( layMenu );




    var listItems = "Inicio::[fa-home],Crear un chat temporal::[fa-minus],Unirse a un chat temporal::[fa-minus],Crear un chat permanente::[fa-minus],Unirse a un chat permanente::[fa-minus]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" );
    lstMenu1.SetColumnWidths( -1, 0.40, 0.18 );
    lstMenu1.SelectItemByIndex( 0, true );
    lstMenu1.SetItemByIndex( 0, "Inicio");
    lstMenu1.SetOnTouch( lstMenu_OnTouch );
    layMenu.AddChild( lstMenu1 );
    
    var sep = app.CreateImage( null, drawerWidth,0.001,"fix", 2,2 );
    sep.SetSize( -1, 1, "px" );
    layMenu.AddChild( sep );
    
	
    var listItems = "Ajustes::[fa-cogs],Información::[fa-info-circle],Puntuar::[fa-star]";
    lstMenu2 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" );
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 );
    lstMenu2.SetOnTouch( lstMenu_OnTouch );
    layMenu.AddChild( lstMenu2 );

	txtTitle = app.CreateText( "App desarrollada por Ángel Alonso",-1,-1,"Left");
	txtTitle.SetTextColor( "#666666" );
	txtTitle.SetMargins( 16,12,0,0, "dip" );
	txtTitle.SetTextSize( 14, "dip" );
	layMenu.AddChild( txtTitle );	

}

function lstMenu_OnTouch( title, body, type, index ) {
    app.CloseDrawer( "Left" );
    
    if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1);
    else lstMenu1.SelectItemByIndex(-1);
    this.SelectItemByIndex( index, true );
    
    title = title.replace(/Inicio/gi,'index');
    title = title.replace(/Crear un chat temporal/gi,'crear-chatt');
    title = title.replace(/Unirse a un chat temporal/gi,'unirse-chatt');
    title = title.replace(/Crear un chat permanente/gi,'crear-chatp');
    title = title.replace(/Unirse a un chat permanente/gi,'unirse-chatp');
    title = title.replace(/Información/gi,'informacion');
    title = title.replace(/Ajustes/gi,'ajustes');

    if (title==="") {
        }
        if (title==="Puntuar") {
            app.OpenUrl('https://play.google.com/store/apps/details?id=com.alienchat')
            } else {
                web.LoadUrl( title + ".html")
                }
                
            }

function OnDrawer( side, state ) {
    console.log( side + " : " + state );
}

function OnMenu( name ) {
    app.OpenDrawer();
}

function OnBack() {
    if( web.CanGoBack()) {
        web.Back();
        } else {
            var sino = app.CreateYesNoDialog( "¿Desea salir de AlienChat?" );
            sino.SetButtonText( "Si","No" );
            sino.SetOnTouch(function(result){ if(result=="Yes") app.Exit(); } );
            sino.Show();
            }
            
            function yesNo_OnTouch( result ) {
                if( result=="Yes" ) app.Exit();
                }
            }