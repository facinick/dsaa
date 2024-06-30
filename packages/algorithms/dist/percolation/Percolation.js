"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percolation = exports.SiteState = void 0;
const data_structures_1 = require("data_structures");
const eventemitter3_1 = require("eventemitter3");
var SiteState;
(function (SiteState) {
    SiteState["OPEN"] = "open";
    SiteState["CLOSED"] = "closed";
    SiteState["FULL"] = "full";
})(SiteState || (exports.SiteState = SiteState = {}));
class Percolation extends eventemitter3_1.EventEmitter {
    constructor(p, q) {
        super();
        this.nSitesOpen = 0;
        this.nSitesFlooded = 0;
        this.ROWS = p;
        this.COLS = q;
        this.FIRST_ROW_INDEX = 0;
        this.FIRST_COL_INDEX = 0;
        this.LAST_ROW_INDEX = this.ROWS - 1;
        this.LAST_COL_INDEX = this.COLS - 1;
        this.TOP_VIRTUAL_SITE_INDEX = 0;
        const ARRAY_LENGTH = this.ROWS * this.COLS + 2;
        this.BOTTOM_VIRTUAL_SITE_INDEX = ARRAY_LENGTH - 1;
        this.sites = new data_structures_1.WeightedQuickUnion(ARRAY_LENGTH);
        this.siteState = new Array(ARRAY_LENGTH).fill(SiteState.CLOSED);
        this.siteState[this.TOP_VIRTUAL_SITE_INDEX] = SiteState.FULL;
        this.siteState[this.BOTTOM_VIRTUAL_SITE_INDEX] = SiteState.OPEN;
    }
    openSite(p) {
        if (this.isOpen(p)) {
            return [];
        }
        this.siteState[p] = SiteState.OPEN;
        this.nSitesOpen += 1;
        this.unionWithOpenNeighbours(p);
        const floodQueue = [];
        this.bfsFlood(p, floodQueue);
        return floodQueue;
    }
    bfsFlood(p, floodQueue) {
        const queue = [p];
        while (queue.length > 0) {
            const currentSite = queue.shift();
            if (!this.shouldFlood(currentSite)) {
                continue;
            }
            this.siteState[currentSite] = SiteState.FULL;
            this.nSitesFlooded += 1;
            floodQueue.push(currentSite);
            const neighbors = this.getNetighbours(currentSite);
            for (const neighbor of Object.values(neighbors)) {
                if (neighbor !== null && this.isOpen(neighbor) && !this.isFull(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    shouldFlood(p) {
        if (this.siteState[p] !== SiteState.OPEN) {
            return false;
        }
        const neighbors = this.getNetighbours(p);
        for (const [position, id] of Object.entries(neighbors)) {
            // top virtal site is always flooded
            if ((position === "top") && (id === null) && this.isFull(this.TOP_VIRTUAL_SITE_INDEX)) {
                // console.log(`flood: ${p} because of ${id}`)
                return true;
            }
            if (id !== null && this.isFull(id)) {
                // console.log(`flood: ${p} because of ${id}`)
                return true;
            }
        }
        return false;
    }
    getNSitesOpen() {
        return this.nSitesOpen;
    }
    getNSitesFlooded() {
        return this.nSitesFlooded;
    }
    getNSites() {
        return this.COLS * this.ROWS;
    }
    unionWithOpenNeighbours(p) {
        const { row } = this.getRowColsFromIndex(p);
        const { left, right, top, bottom } = this.getNetighbours(p);
        // connect to virtual sites if they nearby -------
        if (row === this.LAST_ROW_INDEX) {
            this.sites.union(p, this.BOTTOM_VIRTUAL_SITE_INDEX);
        }
        if (row === this.FIRST_ROW_INDEX) {
            this.sites.union(p, this.TOP_VIRTUAL_SITE_INDEX);
        }
        // connect to open neighbours
        if (left && this.isOpen(left)) {
            this.sites.union(p, left);
        }
        if (right && this.isOpen(right)) {
            this.sites.union(p, right);
        }
        if (top && this.isOpen(top)) {
            this.sites.union(p, top);
        }
        if (bottom && this.isOpen(bottom)) {
            this.sites.union(p, bottom);
        }
    }
    getNetighbours(p) {
        const { row, col } = this.getRowColsFromIndex(p);
        const left = col === this.FIRST_COL_INDEX ? null : p - 1;
        const right = col === this.LAST_COL_INDEX ? null : p + 1;
        const top = row === this.FIRST_ROW_INDEX ? null : p - this.COLS;
        const bottom = row === this.LAST_ROW_INDEX ? null : p + this.COLS;
        return {
            left,
            right,
            top,
            bottom
        };
    }
    getTopVirtualNeighbours() {
        const neighbours = [];
        for (let x = 1; x < this.LAST_COL_INDEX; x++) {
            neighbours.push({
                left: null,
                right: null,
                top: null,
                bottom: x
            });
        }
        return neighbours;
    }
    getRowColsFromIndex(p) {
        return {
            row: Math.floor((p - 1) / this.COLS),
            col: (p - 1) % this.COLS,
        };
    }
    isOpen(p) {
        return (this.siteState[p] === SiteState.OPEN) || this.isFull(p);
    }
    isPercolating() {
        return this.sites.connected(this.TOP_VIRTUAL_SITE_INDEX, this.BOTTOM_VIRTUAL_SITE_INDEX);
    }
    // a site is full, if any of it's neighbour is open and full.
    isFull(p) {
        return this.siteState[p] === SiteState.FULL;
    }
    getPercolatingComponent() {
        return this.sites.findComponent(this.BOTTOM_VIRTUAL_SITE_INDEX);
    }
    getData() {
        return this.sites.getData();
    }
    getSiteState() {
        return this.siteState;
    }
    reset() {
        this.sites = new data_structures_1.WeightedQuickUnion(this.ROWS * this.COLS + 2);
        this.siteState = new Array(this.ROWS * this.COLS + 2).fill(SiteState.CLOSED);
        this.siteState[this.TOP_VIRTUAL_SITE_INDEX] = SiteState.FULL;
        this.siteState[this.BOTTOM_VIRTUAL_SITE_INDEX] = SiteState.OPEN;
        this.nSitesOpen = 0;
        this.nSitesFlooded = 1;
    }
}
exports.Percolation = Percolation;
