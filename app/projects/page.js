export default function ProjectsPage() {
    const projects = [
      {
        ref: "RJF/2023/000073, SERB, DST",
        title: "Syngas Production from Biomass and Naphthalene by Plasma Technique",
        role: "Principal Investigator (PI)",
        status: "Ongoing",
      },
      {
        ref: "Proposal no. 556023 PRELUDIUM-21",
        title:
          "Influence of Hydrothermal Liquefaction Process Conditions on Migration of Inorganics Fraction of Wet, Low-Quality Biomass from Solid to Liquid Phase",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref: "MNRE/A/2024/2926",
        title: "Centre of Excellence of Hydrogen Energy",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref: "ICSSR-SES-2024-416",
        title: "Sustainable Growth: A Solar-Powered Greenhouse Revolution",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref: "CME, AMCB",
        title: "Absorption of Eco-Friendly and Green Technology in the Indian Army",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref: "K78W09D08, Norway Grant (2020–2023)",
        title: "Negative CO₂ Emission Gas Power Plant",
        partners:
          "Gdansk University, IMP PAN, WUST, NTNU, AGH, SINTEF, IASE, Bros Control",
        role: "Technical Researcher / Co-PI",
        status: "Completed",
      },
      {
        ref: "ANRF/Core Research Grant",
        title: "Investigation of NOX Formation in Atmospheric Pressure Microwave Plasma Reactors",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref: "Indo-Danish Joint Proposal 2024",
        title:
          "Creation of a Super Critical Zero Emission Energy System with High Efficiency",
        role: "Principal Investigator (PI)",
        status: "Submitted",
      },
      {
        ref:"Abstract 26107",
        title:
        "Nano-enhanced bactrial stimulation of microorganisms : a new pathway for sustainable degradation of Phthalates",
        role:"First Researcher",
        status :"Submitted"

      }
    ];
  
    const getStatusColor = (status) => {
      switch (status) {
        case "Ongoing":
          return "bg-green-100 text-green-800";
        case "Submitted":
          return "bg-blue-100 text-blue-800";
        case "Completed":
          return "bg-gray-200 text-gray-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
  
    return (
      <div className="min-h-screen  bg-gray-950 text-white  py-12 px-4 sm:px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center text-blue-400   mb-12">
          Research & Development Projects
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <p className="text-sm font-semibold text-blue-300 mb-2">
                Ref: {project.ref}
              </p>
              <h2 className="text-sm text-white mb-3">{project.title}</h2>
  
              {project.partners && (
                <p className="text-sm text-white mb-2">
                  <span className="font-medium text-white">Partners:</span>{" "}
                  {project.partners}
                </p>
              )}
  
              <p className="text-sm text-blue-300 mb-2">
                <span className="font-medium text-blue-300">Role:</span> {project.role}
              </p>
  
              <div className="mt-3">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  