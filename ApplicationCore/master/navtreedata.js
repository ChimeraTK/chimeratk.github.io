var NAVTREE =
[
  [ "ChimeraTK-ApplicationCore", "index.html", [
    [ "Conceptual overview", "conceptual_overview.html", [
      [ "Introduction", "conceptual_overview.html#Introduction", null ],
      [ "Application module", "conceptual_overview.html#conceptualOverview_ApplicationModule", null ],
      [ "Process variables and accessors", "conceptual_overview.html#conceptualOverview_ProcessVariable", [
        [ "Introduction", "conceptual_overview.html#conceptualOverview_ProcessVariable_intro", null ],
        [ "Push and poll transfer modes", "conceptual_overview.html#conceptualOverview_ProcessVariable_accessMode", null ],
        [ "Name and hierarchies", "conceptual_overview.html#conceptualOverview_ProcessVariable_hierarchy", null ],
        [ "Variable networks", "conceptual_overview.html#conceptualOverview_ProcessVariable_network", null ],
        [ "Type and meta information", "conceptual_overview.html#conceptualOverview_ProcessVariable_metainfo", null ]
      ] ],
      [ "Variable groups", "conceptual_overview.html#conceptualOverview_VariableGroup", null ],
      [ "Module groups", "conceptual_overview.html#conceptualOverview_ModuleGroup", null ],
      [ "Device modules", "conceptual_overview.html#conceptualOverview_DeviceModule", [
        [ "Triggers", "conceptual_overview.html#conceptualOverview_DeviceModule_trigger", null ]
      ] ],
      [ "Control system module", "conceptual_overview.html#conceptualOverview_ControlSystemModule", null ],
      [ "The Application", "conceptual_overview.html#conceptualOverview_Application", null ],
      [ "Process variable connections", "conceptual_overview.html#conceptualOverview_Connections", null ],
      [ "Fanouts", "conceptual_overview.html#conceptualOverview_FanOuts", null ]
    ] ],
    [ "Exception Handling", "exception_handling.html", [
      [ "DataValidity", "exception_handling.html#DataValidity", null ]
    ] ],
    [ "Logging module and Logger", "loggingdoc.html", [
      [ "Introduction to the logging mechanism", "loggingdoc.html#loggingintro", null ]
    ] ],
    [ "Server based history module", "historydoc.html", [
      [ "Server based history", "historydoc.html#historyintro", null ]
    ] ],
    [ "ConfigReader Module", "configreader.html", [
      [ "Example usage", "configreader.html#usage", null ],
      [ "XML file structure", "configreader.html#xmlstructure", null ]
    ] ],
    [ "Technical specification: Exception handling for device runtime errors V1.0", "spec_execption_handling.html", [
      [ "A. Introduction", "spec_execption_handling.html#spec_execptionHandling_intro", [
        [ "A.9 Special terminology used in this document", "spec_execption_handling.html#spec_exceptionHandling_intro_terminology", null ],
        [ "(*) Comments", "spec_execption_handling.html#spec_exceptionHandling_intro_comments", null ]
      ] ],
      [ "B. Behavioural description", "spec_execption_handling.html#spec_execptionHandling_behaviour", [
        [ "Runtime error handling", "spec_execption_handling.html#spec_exceptionHandling_behaviour_runtime_errors", null ],
        [ "Recovery", "spec_execption_handling.html#spec_execptionHandling_behaviour_recovery", null ],
        [ "Startup", "spec_execption_handling.html#spec_execptionHandling_behaviour_startup", null ],
        [ "Forced Recovery", "spec_execption_handling.html#spec_execptionHandling_behaviour_forced_recovery", null ],
        [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_behaviour_comments", null ]
      ] ],
      [ "C. Implementation", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation", [
        [ "C.1 Internal interface between ExceptionHandlingDecorator and DeviceModule", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_interface", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_interface_comments", null ]
        ] ],
        [ "C.2 ExceptionHandlingDecorator", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator", [
          [ "Structure", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_structure", null ],
          [ "Behaviour", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_behaviour", null ],
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_comments", null ]
        ] ],
        [ "C.3 DeviceModule", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_deviceModule", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_deviceModule_comments", null ]
        ] ],
        [ "C.4 DeviceModule::reportException()", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_reportException", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_reportException_comments", null ]
        ] ]
      ] ],
      [ "D. Known issues", "spec_execption_handling.html#spec_execptionHandling_known_issues", null ]
    ] ],
    [ "Technical specification: Propagation of initial values V1.0", "spec_initial_value_propagation.html", null ],
    [ "Technical specification: data validity propagation Specification version V1.0", "spec_data_validity_propagation.html", null ],
    [ "Technical specification: StatusAggregator", "spec__status_aggregator.html", null ],
    [ "Example 1: Application with two modules and two hardware devices", "example1.html", null ],
    [ "Example 2: Small but complete application with a proportional controller", "example2.html", null ],
    [ "Example 2a: Application with automation module", "example2a.html", null ],
    [ "Example 3: Minimal device server", "example3.html", null ],
    [ "spec_VersionPropagation", "spec__version_propagation.html", null ],
    [ "What's new in ApplicationCore 2.0", "whats_new__a_c_2_0.html", [
      [ "Initial value propagation", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value", [
        [ "Required changes to existing applications", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value_app_change", null ]
      ] ]
    ] ],
    [ "Status Monitor", "statusmonitordoc.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", null, [
      [ "Namespace List", "namespaces.html", "namespaces" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_application_8cc.html",
"class_chimera_t_k_1_1_application.html#a0ef8bd0ad224ddca42bff1d1ca4aac00",
"class_chimera_t_k_1_1_device_module.html#ad329aeca005a9b591168360ec1b068a6",
"class_chimera_t_k_1_1_scalar_accessor.html#aa95b652b95fb7b51327486ce37d77ab8",
"class_timer_dummy_register_accessor.html#a8b5dc81b01b6018d9beb3077271ac7f1",
"oven__sim_8py.html",
"struct_chimera_t_k_1_1_functor_get_type_for_name.html#aa2b78b9eb987e69a23b5cac8028c9720",
"struct_chimera_t_k_1_1_variable_network_node__data.html#a9a509a8d919b656c9f7293fd181c42e6",
"struct_first_hierarchy_1_1_test_module.html#abb19cc6738439d75d2a4c0caf804c52e",
"struct_second_hierarchy.html#a1a69581b29806e94bc826944b3da056c",
"struct_test_application.html#a6b058ad6b4a1a548e903c7d9b3b56824",
"struct_test_application_connect_to.html#a853865fe094333f31a5129dd5dde64a8",
"struct_test_module_with_variable_groups.html#a2d32d26c7404e5be0ae251eebb3a7137",
"test_device_accessors_8cc.html#a70da5bc5cbb4e68c9fcd452454403fc1",
"test_trigger_8cc.html#af15a1403f8615df2e03b761a97698938"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';