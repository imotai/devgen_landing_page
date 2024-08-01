export type Label = {
    name: string
    color: string
}

export type Issue = {
    id: Number
    provider: string
    issue_num: string
    issue_id: string
    title: string
    content: string
    created_at: string
    end_at: string
    labels: Label[]
    user_id: Number
    issue_url: string
    state: string
    repo: Repository
}

export type IndexStatus = 'Done' | 'Pending' | 'Not found'

export type Repository = {
    id: Number
    fullname: string
    name: string
    clone_url: string
    avatar_url: string
    backend_name: string
    default_branch: string
    is_private: boolean
    desc: string
    indexStatus: IndexStatus
}

export type BranchStatus = {
    name: string
    last_commit: string
}

export type RepositoryStatus = {
    provider: string
    name: string
    sync_status: string
    last_update: string
    last_index: string
    most_common_lang: string
}

export type ChatProps = {
    id: string
    messages: Message[]
    sender: Issue | Repository
}

export type Step = {
    stepType: string
    query: string
    paths: string[]
}
export type Feedback = {
    type: string
    state: boolean
    feedback: string
}
export type Message = {
    id: string
    role: string
    query: string | null
    answer: string | null
    query_timestamp: string
    response_timestamp: string
    steps: Step[]
    feedback?: Feedback
}
