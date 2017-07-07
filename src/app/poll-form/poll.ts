export class Poll {
  constructor(
    public id?: number,
    public question?: string,
    public limit_to_survey?: boolean,
    public select_multiple?: boolean,
    public public_results?: boolean,
    public open?: boolean,
    public responses?: Response[],
    public user?: any
  ){}
}

/*
id: 1,
question: "This is the first poll?",
limit_to_survey: false,
select_multiple: false,
public_results: true,
open: true,
responses: []
*/