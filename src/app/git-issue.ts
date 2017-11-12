import {GitIssueTimeStats} from './git-issue-time-stats';

export interface GitIssue {
    iid: number;
    title: string;
    state: string;
    time_stats: GitIssueTimeStats;
}
