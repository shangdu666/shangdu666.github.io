/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */



function top_nav_toggle() {
  var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
} 

function write_navbar(){

    document.write("        <div class=\"topnav\" id=\"myTopnav\">");
    document.write("");
    document.write("");
    document.write("          <a href=\"\/index.html\" class=\"active\">關於我<\/a>");
    document.write("          <a href=\"\/CV\/CV.html\">個人簡歷<\/a>");
    document.write("          ");
    document.write("          ");
    document.write("          <div class=\"dropdown\">");
    document.write("            <button class=\"dropbtn\"> 書法作品");
    document.write("              <i class=\"fa fa-caret-down\"><\/i>");
    document.write("            <\/button>");
    document.write("            <div class=\"dropdown-content\">");
    document.write("              <a href=\"\/shufa_category1\/shufa_category1.html\">書法作品分類1 <\/a>");
    document.write("              <a href=\"\/shufa_category2\/shufa_category2.html\">書法作品分類2<\/a>");
    document.write("              <a href=\"\/shufa_category3\/shufa_category3.html\">書法作品分類3<\/a>");
    document.write("              <a href=\"\/shufa_others\/shufa_others.html\">其他書法作品<\/a>");
    document.write("            <\/div>");
    document.write("          <\/div>");
    document.write("          ");
    document.write("          <a href=\"\/expo\/expo.html\"> 參加展覽 <\/a>");
    document.write("          <a href=\"\/Contact\/Contact.html\">聯繫<\/a>");
    document.write("          ");
    document.write("          ");
    document.write("          <!-- This is for the respnsive design to collapse-->");
    document.write("          <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">&#9776;<\/a>");
    document.write("         <\/div> ");
  
}