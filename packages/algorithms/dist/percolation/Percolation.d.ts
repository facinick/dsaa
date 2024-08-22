import { WeightedQuickUnion } from 'data_structures';
import { EventEmitter } from 'eventemitter3';
export declare enum SiteState {
    OPEN = "open",
    CLOSED = "closed",
    FULL = "full"
}
declare class Percolation extends EventEmitter {
    private ROWS;
    private COLS;
    private TOP_VIRTUAL_SITE_INDEX;
    private BOTTOM_VIRTUAL_SITE_INDEX;
    private FIRST_ROW_INDEX;
    private FIRST_COL_INDEX;
    private LAST_ROW_INDEX;
    private LAST_COL_INDEX;
    private sites;
    private nSitesOpen;
    private nSitesFlooded;
    private siteState;
    constructor(p: number, q: number);
    openSite(p: number): number[];
    private bfsFlood;
    private shouldFlood;
    getNSitesOpen(): number;
    getNSitesFlooded(): number;
    getNSites(): number;
    unionWithOpenNeighbours(p: number): void;
    getNetighbours(p: number): {
        left: number | null;
        right: number | null;
        top: number | null;
        bottom: number | null;
    };
    getTopVirtualNeighbours(): Array<{
        left: number | null;
        right: number | null;
        top: number | null;
        bottom: number | null;
    }>;
    getRowColsFromIndex(p: number): {
        row: number;
        col: number;
    };
    isOpen(p: number): boolean;
    isPercolating(): boolean;
    isFull(p: number): boolean;
    getPercolatingComponent(): number[];
    getData(): WeightedQuickUnion['id'];
    getSiteState(): SiteState[];
    reset(): void;
}
export { Percolation };
