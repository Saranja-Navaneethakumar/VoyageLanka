// card slider for useful information
$(document).ready(function() {
    let currentInfoCard = 0;
    const infoCards = $('.info-card');

    function showInfoCard(index) {
        infoCards.removeClass('active');
        infoCards.eq(index).addClass('active');
    }

    $('#next-btn').on('click', function() {
        currentInfoCard++;
        if(currentInfoCard >= infoCards.length) currentInfoCard = 0;
        showInfoCard(currentInfoCard);
    });

    $('#prev-btn').on('click', function() {
        currentInfoCard--;
        if(currentInfoCard < 0) currentInfoCard = infoCards.length-1;
        showInfoCard(currentInfoCard);
    });

    showInfoCard(currentInfoCard);
});

