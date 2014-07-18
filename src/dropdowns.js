var dropdowns = {
  action: '<form class="action">' +
            'When:' +
            '<select class="action-if">' +
              '<option value="always">Always</option>' +
              '<option value="facing">Facing...</option>' +
              '<option value="near">Near...</option>' +
            '</select>' +
            '<span class="specific"></span>' +
            'Then:' +
            '<select class="action-then">' +
              '<option value="walkForward">Walk Forward</option>' +
              '<option value="die">Kill Self</option>' +
            '</select>' +
            '<input class="and" type="button" value="And...">' +
            '<input class="moveup" type="button" value="^">' +
            '<input class="movedown" type="button" value="v">' +
          '</form>',

  facing: '<select class="action-arg">' +
            '<option value="1">Water</option>' +
            '<option value="2">Wall</option>' +
            '<option value="3">Enemy</option>' +
          '</select>'
};