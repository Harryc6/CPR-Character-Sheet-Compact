function updateHitPoints() {
    getAttrs(['stat_body', 'stat_will'], function (values) {
        var body = Number(values.stat_body);
        var will = Number(values.stat_will);
        var maxHp = ((Math.ceil((body + will) / 2)) * 5) + 10;
        var halfHp = Math.ceil(maxHp / 2);
        var deathSave = body;
        setAttrs({
            hp: maxHp,
            hp_max: maxHp,
            seriouslywounded: halfHp,
            deathsave: deathSave,
            deathsavehack: deathSave -  1
        });
    });
}
on('change:stat_body change:stat_will', function() {
    updateHitPoints();
});
/**
 * Automatically apply "seriously wounded" and "mortally wounded"
 * modifiers based on HP value.
 */
// function updateHpModifiers() {
//     getAttrs(['hp', 'seriouslywounded'], function (values) {
//         var hp = Number(values.hp);
//         var threshold = Number(values.seriouslywounded);
//         var damageserious = 0;
//         var damagemortal = 0;
//         if (hp < threshold) {
//             damageserious = 'on'
//         }
//         if (hp < 1) {
//             damagemortal = 'on'
//         }
//         setAttrs({
//             damageserious: damageserious,
//             damagemortal: damagemortal
//         });
//     });
// }
// on('change:hp', function() {
//     updateHpModifiers();
// });
/**
 * Unified button to reset HP
 */
on('clicked:resethp', function() {
    updateHitPoints();
});