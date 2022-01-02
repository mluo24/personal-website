export interface ChildrenPageTypes {
  children: JSX.Element
}

export interface ProjectCardType extends ChildrenPageTypes {
  title: string
  year: number
  tools: string[]
  githubLink: string
}

export interface ProjectGridType {
  projects: ProjectCardType[]
}

export interface TimelineBlockType {
  startDate: string
  endDate: string
  role: string
  company: string
  companyUrl?: string
  bullets: string[]
}

export interface TimelineType {
  jobs: TimelineBlockType[]
}
