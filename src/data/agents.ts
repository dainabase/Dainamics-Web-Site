
export interface AgentInfo {
  id: string;
  oldName: string;
  name: string;
  description: string;
  tagline: string;
  impact: string;
  icon: string;
}

export const agentsList: AgentInfo[] = [
  {
    id: "omniresponse",
    oldName: "Support",
    name: "OmniResponse X",
    description: "Customer Relation Superhuman Agent",
    tagline: "Instant answers. Autonomous resolution. Maximum satisfaction.",
    impact: "Reduce response times by 70%, boost satisfaction by 85%",
    icon: "message-square"
  },
  {
    id: "contentforge",
    oldName: "Content",
    name: "ContentForge Prime",
    description: "Content Production Superhuman Agent",
    tagline: "Massive production. Optimal conversion. Digital domination.",
    impact: "Produce 3.5x more content, increase engagement by 215%",
    icon: "file-text"
  },
  {
    id: "acquisitionnova",
    oldName: "LeadGen",
    name: "AcquisitionNova",
    description: "Business Generation Superhuman Agent",
    tagline: "Precise detection. Automatic qualification. Explosive pipeline.",
    impact: "Generate 37% more qualified leads, shorten sales cycle by 42%",
    icon: "users"
  },
  {
    id: "operacore",
    oldName: "AdminFlow",
    name: "OperaCore Quantum",
    description: "Administration Superhuman Agent",
    tagline: "Complete automation. Zero error. Total efficiency.",
    impact: "Eliminate 82% of errors, improve compliance by 65%",
    icon: "layers"
  },
  {
    id: "commandmatrix",
    oldName: "Exec",
    name: "CommandMatrix Elite",
    description: "Personal Assistance Superhuman Agent",
    tagline: "Perfect anticipation. Superior organization. Multiplied power.",
    impact: "Recover 20+ hours monthly, reduce decision stress by 30%",
    icon: "zap"
  }
];

export const getAgentByVulnerability = (vulnerabilityId: string): AgentInfo => {
  switch(vulnerabilityId) {
    case 'a': return agentsList.find(agent => agent.id === "omniresponse")!;
    case 'b': return agentsList.find(agent => agent.id === "contentforge")!;
    case 'c': return agentsList.find(agent => agent.id === "acquisitionnova")!;
    case 'd': return agentsList.find(agent => agent.id === "operacore")!;
    default: return agentsList.find(agent => agent.id === "commandmatrix")!;
  }
};
