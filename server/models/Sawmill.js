// ce template sert de base pour générer n'importe quel niveau de bâtiment
const SawmillTemplate = {
    level: 0,
    yield: 0.2,
    cost: 4 // attention, il s'agit bien du coût pour acheter le niveau suivant
};

const Sawmill = {
    level: 0,
    yield: 0.2,
    cost: 4 ,
    // chaque niveau augmente la production de 30% (* 1.3)
    // et chaque niveau suivant coûte 40% de plus que le précédent (* 1.4)
    upgrade: {
        YIELD_FACTOR: 1.3,
        COST_FACTOR: 1.4
    },
    generate: (level) => {
        Sawmill.yield = Sawmill.upgrade.YIELD_FACTOR * Sawmill.yield;
        Sawmill.cost = Sawmill.upgrade.COST_FACTOR * Sawmill.cost;
        Sawmill.level ++ ;
        // pour générer n'importe quel niveau, on va déjà cloner SawmillTemplate
        // puis boucler (level) fois
        // et à chaque fois, multiplier yield par YIELD_FACTOR
        // et cost par COST_FACTOR
        // avant de retourner le bâtiment au bon niveau
    
}};

module.exports = Sawmill;