/*Release Notes:
Allows students to drag the correct herbs into the formula giving feedback

Future Release:
*Sort herbs into alphabetical order
All formulas and herbs
Picking which set of formulas or herbs to test
Add support for single herbs information matching
***Current development > Game mode where you, the traveler are examined, and must make your medicine.

Include YinYang ratings and reviews that are e-mailed
Add formula categories and formula functions for testability
Show what herbs are in the formula when 5 failed attempts have occured
*/

$(document).ready(function() {
    var $herbStock = $("#herbStock"),
    $formula = $("#formula"),
    yinYang = 0, //YinYang rating, similar to number of stars
    herbCount = 0, //Num of correct times the herb in formula[formulaID].name isRight.
    formulaID = 0, //The array ID of the current formula rolled randomly by RollFormula()
    formula = new Array(),
    add_icon = "<a href='' title='Add this to your formula!' class='ui-icon ui-icon-plus'>Add this!</a>",
    remove_icon = "<a href='' title='Remove this Herb' class='ui-icon  ui-icon-minus'>Remove Herb</a>";

    //Place a formula name in the product header
    function pickFormula(formulaName) {
        $("#formula h4").html(formulaName);
    }

    //Compare the Herbs in the formula with the herb being dropped
    function compareHerbs(HerbDropping, ID) {
        var isRight = false,
        herbs = formula[ID].ingredients.split(", ");

        for (x = 0; x < herbs.length; x++) {
            //window.alert("Searching: " + herbs[x]);
            //window.alert("Against: " + HerbDropping);
            if (HerbDropping == herbs[x]) {
                isRight = true;
                herbCount++;
                break;
            }
            else {
                isRight = false;
            }
        }
        //Check if the formula has been filled
        if (herbCount == herbs.length) {
            //Window alert for now...in the future implement into the html
            window.alert("You take a sip of " + formula[ID].name + " and find it " + forumula[ID].taste + " and " + formula[ID].temp);
            RollFormula(formulaID++);
            //create a function to reset the herbs
        }
        return isRight;
    }

    //Sort the Stock of Herbs
    function sort_herbStock() {
        var $herbStockli = $herbStock.children('li');

        $herbStockli.sort(function(a, b) {
            var an = a.getAttribute('id'),
            bn = b.getAttribute('id');

            if(an > bn) {
                return 1;
            }

            if(an < bn) {
                return -1;
            }
            else {
                return 0;
            }
        });

        $herbStockli.detach().appendTo($herbStock);
    }

    sort_herbStock();

    //Add Swith Case for an HTML selection menu
    /*
    switch(groupSelect) {
        case "Group 1":
        case "Group 2":
        case "Group 3":
        case "Group 4":
        case "Group 5":
        case "Group 6":
        case "Group 7":
        case "Group 8":
        case "Group 9":
        case "Group 10":
    }*/


        function DecocStruc(name, ingredients, taste, temp, complexion, condition) {
            this.name = name;
            this.ingredients = ingredients;
            this.taste = taste;
            this.temp = temp;
            this.complexion = complexion;
            this.condition = condition;
        }

        /****Pull JSON data from separate file
        $.getJSON("decoctions.json", function(data) {
          console.log('loaded');
          $.each(data.formulas, function(index, formulas) {
              var formula[index] = new DecocStruc(formulas.name, formulas.ingredients, formulas.taste, formulas.temp, formulas.complexion, formulas.condition);
              console.log(arr)
            });
        });****/

    // Array of formulas
    formula[0] = new DecocStruc("Sang Ju Yin", "Sang Ye, Ju Hua, Lian Qiao, Bo He, Jie Geng, Xing Ren, Lu Gen, Gan Cao");
    formula[1] = new DecocStruc("Yin Qiao San", "Jin Yin Hua, Lian Qiao, Jie Geng, Nui Bang Zi, Bo He, Don Dou Chi, Jing Jie, Dan Zhu Ye, Lu Gen, Gan Cao");
    formula[2] = new DecocStruc("Bai Hu Tang", "Shi Gao, Zhi Mu, Geng Mi, Gan Cao");
    formula[3] = new DecocStruc("Ma Huang Tang", "Ma Huang, Gui Zhi, Xing Ren, Gan Cao");
    formula[4] = new DecocStruc("Gui Zhi Tang", "Gui Zhi, Bai Shao, Sheng Jiang, Da Zao, Gan Cao");
    formula[5] = new DecocStruc("Si Jun Zi Tang", "Ren Shen, Bai Zhu, Fu Ling, Gan Cao");
    formula[6] = new DecocStruc("Si Wu Tang", "Shu Di Huang, Bai Shao, Dang Gui, Chuan Xiong");
    formula[7] = new DecocStruc("Er Chen Tang", "Ban Xia, Chen Pi, Fu Ling");

    /*Formulas for Excess and Deficiency Wind-Cold
    formula[0] = new DecocStruc("Jing Fang Bai Du San", "Jing Jie, Fang Feng, Qiang Huo, Chai Hu, Qian Hu, Chuan Xiong, Zhi Shi, Fu Ling, Jie Geng, Gan Cao");
    formula[1] = new DecocStruc("Qiang Huo Sheng Shi Tang", "Qiang Huo, Du Huo, Chuan Xiong, Man Jing Zi, Fang Feng, Gao Ben, Gan Cao");
    formula[2] = new DecocStruc("Xin Jia Xiang Ru Yin", "Xiang Ru, Bian Dou, Huo Po, Jin Yin Hua, Lian Qiao");
    formula[3] = new DecocStruc("Sang Xing Tang", "Sang Ye, Xing Ren, Sha Shen, Chuan Bei Mu, Shan Zhi Zi, Dan Dou Chi, Li Pi")
    formula[4] = new DecocStruc("Xing Su San", "Xing Ren, Zi Su Ye, Ban Xia, Fu Ling, Qian Hu, Jie Geng, Zhi Ke, Sheng Jiang, Chen Pi, Da Zao, Gan Cao");
    formula[5] = new DecocStruc("Shen Su Yin", "Ren Shen, Zi Su Ye, Ge Gen, Qian Hu, Ban Xia, Fu Ling, Jie Geng, Chen Pi, Zhi Ke, Mu Xiang, Gan Cao, Sheng Jiang, Da Zao");
    formula[6] = new DecocStruc("Gui Zhi Jia Fu Zi Tang", "Gui Zhi, Bai Shao, Sheng Jiang, Da Zao, Gan Cao, Fu Zi");
    formula[7] = new DecocStruc("Jia Jian Wei Rui Tang", "Yu Zhu, Cong Bai, Jie Geng, Bai Wei, Dan Dou Chi, Bo He, Zhi Gan Cao, Da Zao");
    formula[8] = new DecocStruc("Cong Bai Qi Wei Yin", "Cong Bai, Dan Dou Chi, Ge Gen, Sheng Jiang, Mai Men Dong, Shu Di Huang");
    */

    formula[8] = new DecocStruc("Si Ni San", "Chai Hu, Zhi Shi, Bai Shao, Gan Cao");
    formula[9] = new DecocStruc("Liu Wei Di Huang Wan", "Shu Di Huang, Shan Zhu Yu, Shan Yao, Fu Ling, Mu Dan Pi, Ze Xie");
    formula[10] = new DecocStruc("Li Zhong Tang", "Gan Jiang, Ren Shen, Bai Zhu, Gan Cao");
    formula[11] = new DecocStruc("Da Cheng Qi Tang", "Da Huang, Mang Xiao, Zhi Shi, Huo Po");
    formula[12] = new DecocStruc("Huang Lian Jie Du Tang", "Huang Lian, Huang Qin, Huang Bai, Zhi Zi");
    formula[13] = new DecocStruc("Sheng Mai San", "Ren Shen, Wu Wei Zi, Mai Men Dong")
    formula[14] = new DecocStruc("Dao Chi San", "Sheng Di Huang, Mu Tong, Dan Zhu Ye, Gan Cao Shao");
    formula[15] = new DecocStruc("Si Ni Tang", "Fu Zi, Gan Jiang, Gan Cao");

    formula[16] = new DecocStruc("Dang Gui Bu Xue Tang", "Huang Qi, Dang Gui");
    formula[17] = new DecocStruc("Yu Ping Feng San", "Huang Qi, Bai Zhu, Fang Feng");
    formula[18] = new DecocStruc("Jin Ling Zi San", "Chuan Lian Zi, Yan Hu Suo");
    formula[19] = new DecocStruc("Zou Jin Wan", "Huang Lian, Wu Zhu Yu");
    formula[20] = new DecocStruc("Liu Jun Zi Tang", "Ren Shen, Bai Zhu, Fu Ling, Gan Cao, Ban Xia, Chen Pi");
    formula[21] = new DecocStruc("Xiang Sha Liu Jun Zi Tang", "Ren Shen, Bai Zhu, Fu Ling, Gan Cao, Ban Xia, Chen Pi, Mu Xiang, Sha Ren");
    formula[22] = new DecocStruc("Bu Zhong Yi Qi Tang", "Huang Qi, Ren Shen, Bai Zhu, Gan Cao, Dang Gui, Chen Pi, Sheng Ma, Chai Hu");
    formula[23] = new DecocStruc("Sheng Ling Bai Zhu San", "Ren Shen, Bai Zhu, Fu Ling, Gan Cao, Shan Yao, Bai Bian Duo, Lian Zi, Yi Yi Ren, Sha Ren, Jie Geng");

    formula[24] = new DecocStruc("Gui Pi Tang", "Ren Shen, Huang Qi, Bai Zhu, Fu Ling, Suan Zao Ren, Long Yan Rou, Mu Xiang, Sheng Jiang, Da Zao, Gan Cao, Dang Gui, Yuan Zhi");
    formula[25] = new DecocStruc("Ren Shen Bai Du San", "Qiang Huo, Du Huo, Chuan Xiong, Chai Hu, Bo He, Jie Geng, Zhi Ke, Qian Hu, Ren Shen, Fu Ling, Gan Cao, Sheng Jiang");
    formula[26] = new DecocStruc("Ba Zhen Tang", "Ren Shen, Fu Ling, Bai Zhu, Gan Cao, Shu Di Huang, Bai Shao, Dang Gui, Chuan Xiong");
    formula[27] = new DecocStruc("Shi Quan Da Bu Tang", "Ren Shen, Bai Zhu, Fu Ling, Gan Cao, Shu Di Huang, Bai Shao, Dang Gui, Chuan Xiong, Rou Gui, Huang Qi");
    formula[28] = new DecocStruc("Du Huo Ji Sheng Wan", "Du Huo, Xi Xin, Fang Feng, Qin Jiao, Sang Ji Sheng, Du Zhong, Niu Xi, Rou Gui");
    formula[29] = new DecocStruc("Xue Fu Zhu Yu Tang", "Tao Ren, Hong Hua, Chuan Xiong, Chi Shao, Dang Gui, Sheng Di Huang, Chuan Niu Xi, Chai Hu, Jie Geng, Zhi Ke, Gan Cao");
    formula[30] = new DecocStruc("Ban Xia Bai Zhu Tian Ma Tang", "Ban Xia, Tian Ma, Bai Zhu, Fu Ling, Chen Pi, Gan Cao, Sheng Jiang, Da Zao");
    formula[31] = new DecocStruc("Chai Hu Shu Gan San", "Chen Pi, Chuan Xiong, Bai Shao, Xiang Fu, Chai Hu, Zhi Ke, Gan Cao");

    formula[32] = new DecocStruc("Xing Su San", "Zi Su Ye, Xing Ren, Qian Hu, Jie Geng, Zhi Ke, Chen Pi, Fu Ling, Ban Xia, Sheng Jiang, Da Zao, Gan Cao");
    formula[33] = new DecocStruc("Wen Dan Tang", "Ban Xia, Zhu Ru, Zhi Shi, Chen Pi, Fu Ling, Gan Cao, Sheng Jiang, Da Zao");
    formula[34] = new DecocStruc("Huo Xiang Zheng Qi San", "Huo Xiang, Huo Po, Chen Pi, Zi Su Ye, Bai Zhi, Ban Xia, Da Fu Pi, Bai Zhu, Fu Ling, Jie Geng, Gan Cao, Sheng Jiang, Da Zao");
    formula[35] = new DecocStruc("Bao He Wan", "Shan Zha, Shen Qu, Lai Fu Zi, Chen Pi, Ban Xia, Fu Ling, Lian Qiao");
    formula[36] = new DecocStruc("Xiao Yao San", "Chai Hu, Dang Gui, Bai Shao, Bai Zhu, Fu Ling, Gan Cao, Wei Jiang, Bo He");
    formula[37] = new DecocStruc("Ping Wei San", "Cang Zhu, Huo Po, Chen Pi, Gan Cao, Sheng Jiang, Da Zao");
    formula[38] = new DecocStruc("Bei Mu Gua Lou San", "Bei Mu, Gua Lou, Tian Hua Fen, Fu Ling, Ju Hong, Jie Geng");
    formula[39] = new DecocStruc("Ban Xia Huo Po Tang", "Ban Xia, Huo Po, Fu Ling, Sheng Jiang, Zi Su Ye");

    formula[40] = new DecocStruc("Jin Gui Shen Qi Wan", "Shu Di Huang, Shan Zhu Yu, Shan Yao, Fu Ling, Mu Dan Pi, Ze Xie, Fu Zi, Gui Zhi");
    formula[41] = new DecocStruc("Zhi Bai Di Huang Wan", "Zhi Mu, Huang Bai, Shu Di Huang, Shan Zhu Yu, Shan Yao, Fu Ling, Mu Dan Pi, Ze Xie");
    formula[42] = new DecocStruc("Qi Ju Di Huang Wan", "Gou Qi Zi, Ju Hua, Shu Di Huang, Shan Zhu Yu, Shan Yao, Fu Ling, Mu Dan Pi, Ze Xie");
    formula[43] = new DecocStruc("Yi Guan Jian", "Sheng Di Huang, Gou Qi Zi, Sha Shen, Mai Men Dong, Dang Gui, Chuan Lian Zi");
    formula[44] = new DecocStruc("Tian Wang Bu Xin Dan", "Sheng Di Huang, Tian Men Dong, Mai Men Dong, Xuan Shen, Dan Shen, Dang Gui, Bai Zi Ren, Yuan Zhi, Ren Shen, Fu Ling, Suan Zao Ren, Wu Wei Zi, Jie Geng, Zhu Sha");
    formula[45] = new DecocStruc("Qing Hao Bie Jia Tang", "Bie Jia, Qing Hao, Sheng Di Huang, Zhi Mu, Mu Dan Pi");
    formula[46] = new DecocStruc("Gu jing Wan", "Gui Ban, Bai Shao, Huang Qin, Chun Pi, Huang Bai, Xiang Fu");
    formula[47] = new DecocStruc("Gan Mai Da Zao Tang", "Gan Cao, Fu Xiao Mai, Da Zao");

    formula[48] = new DecocStruc("Ge Gen Tang", "Ge Gen, Ma Huang, Gui Zhi, Bai Shao, Sheng Jiang, Da Zao, Gan Cao");
    formula[49] = new DecocStruc("Chai Ge Jie Ji Tang", "Chai Hu, Ge Gen, Qiang Huo, Bai Zhi, Huang Qin, Shi Gao, Jie Geng, Bai Shao, Gan Cao, Sheng Jiang, Da Zao");
    formula[50] = new DecocStruc("Ma Xing Shi Gan Tang", "Ma Huang, Shi Gao, Xing Ren, Gan Cao");
    formula[51] = new DecocStruc("Xiao Cheng Qi Tang", "Da Huang, Huo Po, Zhi Shi");
    formula[52] = new DecocStruc("Tiao Wei Cheng Qi Tang", "Da Huang, Gan Cao, Mang Xiao");
    formula[53] = new DecocStruc("Ban Xia Xie Xin Tang", "Ban Xia, Gan Jiang, Huang Qin, Huang Lian, Ren Shen, Da Zao, Gan Cao");
    formula[54] = new DecocStruc("Wu Zhu Yu Tang", "Wu Zhu Yu, Sheng Jiang, Ren Shen, Da Zao");
    formula[55] = new DecocStruc("Da Jian Zhong Tang", "Hua Jiao, Gan Jiang, Ren Shen, Yi Tang");
    formula[56] = new DecocStruc("Xiao Jian Zhong Tang", "Gui Zhi, Bai Shao, Sheng Jiang, Da Zao, Gan Cao, Yi Tang");

    //Roll a random formula
    function RollFormula(numSet) {
        var numFormulas = formula.length;

        if (numSet == 64) {
            formulaID = Math.floor(Math.random() * numFormulas);
        }
        else {
            formulaID = numSet;
        }

        $formula.children('ul').children('li').each(function(){
            recycleImage($(this), add_icon);
        });
         //  recycleImage($formula.children('ul').children('li').first(), add_icon);
        $formula.children('ul').children('li').promise().done(function() {
            sort_herbStock();
        });

        //Reset the Counters
        herbCount = 0;
        yinYang = 5;

        //Change the heading
         $("#formula h4").html(formula[formulaID].name + " (" + formula[formulaID].ingredients.split(", ").length + ")");

        //TODO: Put all of the herbs back on the shelf
    }

    RollFormula(0);

    $("#formulaSet" ).selectmenu({
        select: function(event, data) {
            RollFormula((data.item.value-1) * 8);
        }
    });


    //Modal Dialog Setup
    var $modalDialog = $('<div/>', {
        'class': 'exampleModal',
        'id': 'exampleModal1'
    })
    .appendTo('body')
    .dialog({
        resizable: false,
        autoOpen: false,
        height: 300,
        width: 350,
        show: 'fold',
        modal: true
    });

    $("li", "#herbStock").tooltip({
      show: {
        effect: "slideDown",
        delay: 50
      }
    });

    // Make herbStock items draggable
    $("li", $herbStock).draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    // Make the formula area droppable if the herb dropped is an ingredient
    $formula.droppable({
        //"#herbStock > li"
        accept: "#herbStock > li",
        activeClass: "ui-state-highlight",
        drop: function(event, ui) {
            //window.alert(ui.draggable.children().attr('title'));
            //window.alert(compareHerbs(ui.draggable.children().attr('title'), formulaID));
            if (compareHerbs(ui.draggable.children().attr('title'), formulaID) == true) {
                deleteImage(ui.draggable, remove_icon);
            }
            else {
                yinYang--;
                window.alert("Wrong Herb! " + String(yinYang) + " tries remaining.");
                if (yinYang == 0) {
                    yinYang = 5;
                    window.alert("The herbs in " + formula[formulaID].name + " are " + formula[formulaID].ingredients);
                    /*
                    for (var x = 0; x < herbCount; x++) {
                        $formula.children("li.ui-widget-content").appendTo($herbStock);
                        $formula.children("li.ui-widget-content").remove();
                    }

                    RollFormula();
                    */
                    RollFormula(formulaID);
                };
            };
        }
    });

     // let the herbStock be droppable as well, accepting herbs from the Formula
    $herbStock.droppable({
      accept: "#formula li",
      activeClass: "custom-state-active",
      drop: function(event, ui) {
          recycleImage(ui.draggable, add_icon);
      }
    });

    //$formula.droppable(accept: compareHerbs(ui.draggable.children().attr('title'), formulaID));

    // Herb removal function

    function deleteImage($item, icon) {
      $item.fadeOut(function() {
        var $list = $("ul", $formula).length ?
          $("ul", $formula) :
          $("<ul class='herbStock ui-helper-reset'/>").appendTo($formula);

        $item.find("a.ui-icon-plus").remove();
        $item.appendTo($list).fadeIn(1);
      });
    }

    // image recycle function
    function recycleImage($item, icon) {
        $item.fadeOut(function() {
            $item
                .find("a.ui-icon-minus")
                .remove()
                .end()
                .css( "width", "50px")
                .append(icon)
                .find("img")
                .css("height", "50px")
                .end()
                .appendTo($herbStock)
                .fadeIn();
        });

    }

    // View the Properties of each herb
    function viewProperties($link) {
        var url = $link.attr('href'),
        title = $link.siblings(".title")
        $modalDialog.load(url);
        $modalDialog.dialog({
            title: "Herb Information"
        })

        $modalDialog.dialog("open");

        /*var src = $link.attr("href"),
        title = $link.siblings("img" ).attr("alt"),
        $modal = $("img[src$='" + src + "']");

      if ($modal.length) {
            $modal.dialog("open");
      } else {
            var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
            .attr("src", src).appendTo( "body");
            setTimeout(function() {
                img.dialog({
                    title: title,
                    width: 400,
                    modal: true
                });
            }, 1 );
      }*/
    }

    // resolve the icons behavior with event delegation
    $("ul.herbStock > li").click(function(event) {
      var $item = $(this),
            $target = $(event.target);

        if ($target.is("a.ui-icon-plus") ) {
            //TODO: Implement herb Checking
            deleteImage($item, remove_icon);
            window.alert($item);
        }
        else if ($target.is("a.ui-icon-zoomin")) {
            $target.preventDefault;
            viewProperties($target);
        }
        else if ($target.is("a.ui-icon-minus")) {
            recycleImage($item, add_icon);
        }

      return false;
    });

    $('#btn_hint').click(function(){
        window.alert("Herbs: " + formula[formulaID].ingredients);
    });

    $('#btn_next').click(function(){
        if (formulaID <= formula.length){
            RollFormula(formulaID+1);
        }
    });

    $('#btn_prev').click(function(){
        if (formulaID > 0){
            RollFormula(formulaID-1);
        }
    });

/*    Dialog Properties
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "explode",
        duration: 1000
      }
    });

    //Open dialog on click
    $( "#herbStock" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    })
*/
});
