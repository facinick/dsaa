"use strict";
class Graph {
    constructor(nRows, nCols, pathFindingAlgorithm, isValidMoveFunction) {
        this._adjacencyMatrix = [];
        this.initializeAdjacencyMatrix = () => {
            this._adjacencyMatrix = [];
            for (let i = 0; i < this.nRows; i++) {
                for (let j = 0; j < this.nCols; j++) {
                }
            }
        };
        this.setPathFindingAlgorithm = (algorithm) => {
            this.pathFindingAlgorithm = algorithm;
        };
        this.setIsValidMoveFunction = (func) => {
            this.isValidMoveFunction = func;
        };
        this.nCols = nCols;
        this.nRows = nRows;
        this.pathFindingAlgorithm = pathFindingAlgorithm;
        this.isValidMoveFunction = isValidMoveFunction;
        this.initializeAdjacencyMatrix();
    }
}
