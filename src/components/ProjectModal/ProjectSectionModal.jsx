import { 
  SectionOverview, SectionAudit, SectionTechnical,
  SectionAnalysis, SectionProblem, SectionInsight,
  SectionRecommendation, SectionDashboard 
} from "./Sections";

const ComponentMap = {
  Overview: SectionOverview,
  Audit: SectionAudit,
  Technical: SectionTechnical,
  Analysis: SectionAnalysis,
  Problem: SectionProblem,
  Insight: SectionInsight,
  Recommendation: SectionRecommendation,
  Dashboard: SectionDashboard,
};

export const ProjectSectionModal = ({ project }) => {
  const steps = project.steps || [];
  if (steps.length === 0) return null;

  return (
    // Zero-margin wrapper — sections are naturally full-bleed
    <div className="w-full flex flex-col">
      {steps.map((step, idx) => {
        const Section = ComponentMap[step.tag];
        if (!Section) return null;
        return <Section key={idx} id={`section-${step.tag}`} data={step} />;
      })}
    </div>
  );
};
