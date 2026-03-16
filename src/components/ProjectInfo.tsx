import React from 'react';

interface ProjectInfoProps {
  title?: string;
  fields?: { label: string; value: string }[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title = 'Project Information',
  fields = [
    { label: 'Client', value: 'Sample Client' },
    { label: 'Year', value: '2024' },
    { label: 'Category', value: 'Editorial Design' }
  ]
}) => {
  console.log('ProjectInfo rendered');

  return (
    <div data-cmp="ProjectInfo" className="bg-muted p-8">
      <h3 className="editorial-heading text-2xl mb-6">{title}</h3>
      <dl className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="border-b border-border pb-4 last:border-0">
            <dt className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
              {field.label}
            </dt>
            <dd className="text-foreground font-medium">{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ProjectInfo;