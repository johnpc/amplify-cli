import { v4  as  uuid } from 'uuid';

const getAllDefaults = (project: any) => {
  const name = project.projectConfig.projectName.toLowerCase();
  const [shortId] = uuid().split('-');
  const defaults = {
    resourceName: `dynamo${shortId}`,
    tableName: `${name}${uuid().replace(/-/g, '')}`,
  };

  return defaults;
};

module.exports = {
  getAllDefaults,
};