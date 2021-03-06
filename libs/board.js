module.exports.board = {
    initialized: false,
    size: 5,
    currentPosition: {
        x: null,
        y: null,
        d: null
    },
    position: {
        directionMatrix: {
            n: { axis: 'y', traj: 1,  turns: { left: 'w', right: 'e'} },
            s: { axis: 'y', traj: -1, turns: { left: 'e', right: 'w'} },
            e: { axis: 'x', traj: 1,  turns: { left: 'n', right: 's'} },
            w: { axis: 'x', traj: -1, turns: { left: 's', right: 'n'} }
        },
        move: ( from ) => {
            let matrix = this.board.position.directionMatrix[from.d]
            return Object.assign({}, from, {
                [matrix.axis]: parseInt(from[matrix.axis]) + parseInt(matrix.traj)
            })
        },
        turn: ( from, turnDirection ) => {
            let matrix = this.board.position.directionMatrix[from.d]
            return Object.assign({}, from, {
                d: matrix.turns[turnDirection]
            })
        }
    },
    validPosition: (position) => {
        return position.x > -1
            && position.x < this.board.size
            && position.y > -1
            && position.y < this.board.size
    },
    validDirection: (position) => {
        return ['n','s','e','w'].indexOf(position.d.toLowerCase()) > -1
    }
}