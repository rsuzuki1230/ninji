$(function(){
    // 画面表示時に価格の合計値を計算
    var sum_man = sum();
    
    // addボタン押下時の処理
    $("#add").click(function(){
      var addsagyou = $("#sagyou").val();
      var addnum = $("#num").val();
      var addhour = $("#hour").val();
    //   var addninji = $("#ninji").val();
      var addninji = addnum * addhour;
      var addcoment = $("#coment").val();
      
      $('table').append('<tr><td>'+ addsagyou
                        + '</td><td>' + addnum
                        + '</td><td>' + addhour
                        + '</td><td class = "addninji">' + addninji
                        + '</td><td>' + addcoment
                        +'</td></tr>');
      // 合計値を再計算
      var sum_man = sum();
    });
  
    function sum(){
      // 表の人時を取得する(tdの奇数列を取得)
      var ninjilist = $("table td[class=addninji]").map(function(index, val){
        
        var addninji = parseFloat($(val).text())
        if(addninji >= 0) {
          return addninji;
        } else {
          return null;
        }
      });
      // 人時の合計を求める
      var total = 0;
      ninjilist.each(function(index, val){
        total = total + val;
      });
      $(".sum_man").text("合計人時："+total);
    }

    
    // new Chart(document.getElementById("myChart"), {
    //     type: "doughnut",
    //     data: {
    //     //   labels: ["赤", "青", "黄色"],
    //       datasets: [
    //         {
    //           data: Object.value(ninjilist),
    //           backgroundColor: [
    //             "rgb(255, 99, 132)",
    //             "rgb(54, 162, 235)",
    //             "rgb(255, 205, 86)"
    //           ]
    //         }
    //       ]
    //     }
    //   });
    
  });
  
