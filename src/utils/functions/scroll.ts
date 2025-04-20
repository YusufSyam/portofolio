export const scrollToAboutMe = () => {
  const element = document.getElementById('section-aboutMe');
  element?.scrollIntoView({ behavior: 'smooth', block: "center" });
};

export const scrollToProjects = () => {
    const element = document.getElementById('section-projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  export const scrollToContacts = () => {
    const element = document.getElementById('section-contacts');
    element?.scrollIntoView({ behavior: 'smooth', block: "center" });
  };
  
    