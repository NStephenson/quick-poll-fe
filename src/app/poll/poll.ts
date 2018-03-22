export class Poll {
  constructor(
    public id?: number,
    public question?: string,
    public limit_to_survey?: boolean,
    public select_multiple?: boolean,
    public public_results?: boolean,
    public open?: boolean,
    public responses: Response[] = [],
    public responses_attributes?: any,
    public user?: any
  ){}
}

export class Response {
  constructor(
    public id?: number,
    public text: string = ''
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
