import { IBaseToken } from "./types";

abstract class IntersectionBuilder {
  abstract addTokens(tokens: IBaseToken[]): IntersectionBuilder;
  abstract execute(): IBaseToken[];
  protected abstract clearTokens(): IntersectionBuilder;
}

export class TokenIntersectionBuilder extends IntersectionBuilder {
  private tokens: IBaseToken[][] = [];

  addTokens(_tokens: IBaseToken[]): IntersectionBuilder {
    this.tokens = [...this.tokens, _tokens];
    return this;
  }

  protected clearTokens(): IntersectionBuilder {
    this.tokens = [];
    return this;
  }

  execute(): IBaseToken[] {
    if (this.tokens.length < 2)
      throw new Error("min. 2 tokens list to compare");

    const intersectionTokens = this.tokens.reduce((intersection, currArr) => {
      return intersection.filter((item) =>
        currArr.some((nextItem) => nextItem.name === item.name)
      );
    });

    this.clearTokens();
    return intersectionTokens;
  }
}
