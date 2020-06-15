var catAndActs = {};
catAndActs['India'] = ['munnar', 'west bengal', 'Taj  Mahal, Agra', 'Andaman', 'Coorg', 'Manali', 'Ooty', 'Shimla', 'Jaipur', 'varanasi', 'Sikkim', 'Delhi', 'Kodaikanal', 'rajastan', 'punjap', 'Mussoorie', 'Pondicherry', 'Tirupati', 'Vaishno Devi', 'Alleppey', 'Other'];
catAndActs['World'] = ['Paris', 'New Zealand', 'London', 'Bora Bora', 'Great Barrier Reef', 'Iceland', 'Pamukalle', 'New York City', 'Barcelona', 'Amsterdam', 'Costa Rica', 'Bali', 'Phuket', 'San Francisco', 'Seychelles', 'British Virgin Islands', 'Santorini', 'Prague', 'sydney', 'Bangkok', 'Other'];
catAndActs['Both'] = ['munnar', 'west bengal', 'Taj  Mahal, Agra', 'Andaman', 'Coorg', 'Manali', 'Ooty', 'Shimla', 'Jaipur', 'varanasi', 'Sikkim', 'Delhi', 'Kodaikanal', 'rajastan', 'punjap', 'Mussoorie', 'Pondicherry', 'Tirupati', 'Vaishno Devi', 'Alleppey','Paris', 'New Zealand', 'London', 'Bora Bora', 'Great Barrier Reef', 'Iceland', 'Pamukalle', 'New York City', 'Barcelona', 'Amsterdam', 'Costa Rica', 'Bali', 'Phuket', 'San Francisco', 'Seychelles', 'British Virgin Islands', 'Santorini', 'Prague', 'sydney', 'Bangkok', 'Other'];
function ChangeList() {
    var catList = document.getElementById("selecttour");
    var actList = document.getElementById("tourplace");
    var selCat = catList.options[catList.selectedIndex].value;
    while (actList.options.length) {
        actList.remove(0);
    }
    var cats = catAndActs[selCat];
    if (cats) {
        var i;
        for (i = 0; i < cats.length; i++) {
            var cat = new Option(cats[i]);
            $('#tourplace').append('<option>'+cats[i]+'</option>');
            $('#tourplace').selectpicker('refresh');
        }
    }
} 



$(function () {
    $('.selectpicker').selectpicker();
});

function showAmt(){
    var element = document.getElementById('btn-book');
    element.parentNode.removeChild(element);
    var buttAmt = document.getElementById('btn-amt');
    buttAmt.style.display = "block";
}