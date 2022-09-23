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
      [ "Introduction", "exception_handling.html#exceptionHandling_Introduction", null ],
      [ "DataValidity", "exception_handling.html#exceptionHandling_DataValidity", null ]
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
        [ "A. Introduction", "spec_initial_value_propagation.html#autotoc_md16", null ],
        [ "B. Definitions", "spec_initial_value_propagation.html#autotoc_md17", null ],
        [ "C. High-level requirements", "spec_initial_value_propagation.html#autotoc_md18", [
          [ "(*) Comments", "spec_initial_value_propagation.html#autotoc_md19", null ]
        ] ],
        [ "D. Detailed requirements", "spec_initial_value_propagation.html#autotoc_md20", [
          [ "Comments", "spec_initial_value_propagation.html#autotoc_md21", null ]
        ] ],
        [ "E. Implementation", "spec_initial_value_propagation.html#autotoc_md22", [
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md23", null ],
          [ "ApplicationModule", "spec_initial_value_propagation.html#autotoc_md24", null ],
          [ "ThreadedFanOut", "spec_initial_value_propagation.html#autotoc_md25", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md26", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md27", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md28", null ],
          [ "Application", "spec_initial_value_propagation.html#autotoc_md29", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md30", null ],
          [ "ProcessArrays", "spec_initial_value_propagation.html#autotoc_md31", null ]
        ] ],
        [ "F. Known bugs [OUTDATED!!!]", "spec_initial_value_propagation.html#autotoc_md32", [
          [ "DeviceAccess interface", "spec_initial_value_propagation.html#autotoc_md33", null ],
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md34", null ],
          [ "ApplicationModule / EntityOwner", "spec_initial_value_propagation.html#autotoc_md35", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md36", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md37", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md38", null ],
          [ "VariableNetworkNode", "spec_initial_value_propagation.html#autotoc_md39", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md40", null ],
          [ "Non-memeber functions", "spec_initial_value_propagation.html#autotoc_md41", null ],
          [ "Documentation", "spec_initial_value_propagation.html#autotoc_md42", null ]
        ] ],
        [ "1. General idea", "spec_data_validity_propagation.html#autotoc_md0", [
          [ "Comments", "spec_data_validity_propagation.html#autotoc_md1", null ]
        ] ],
        [ "2. Technical implementation", "spec_data_validity_propagation.html#autotoc_md2", [
          [ "2.1 MetaDataPropagatingRegisterDecorator (*)", "spec_data_validity_propagation.html#autotoc_md3", null ],
          [ "2.2 removed", "spec_data_validity_propagation.html#autotoc_md4", null ],
          [ "2.3 ApplicationModule", "spec_data_validity_propagation.html#autotoc_md5", null ],
          [ "2.4 TriggerFanOut", "spec_data_validity_propagation.html#autotoc_md6", null ],
          [ "2.5 Interaction with exception handling", "spec_data_validity_propagation.html#autotoc_md7", null ],
          [ "2.6 Application class", "spec_data_validity_propagation.html#autotoc_md8", null ],
          [ "Comments:", "spec_data_validity_propagation.html#autotoc_md9", null ]
        ] ],
        [ "3. Implementation details", "spec_data_validity_propagation.html#autotoc_md10", null ],
        [ "4. Circular dependencies", "spec_data_validity_propagation.html#autotoc_md11", [
          [ "4.1 General behaviour", "spec_data_validity_propagation.html#autotoc_md12", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md13", null ]
          ] ],
          [ "4.3 Technical implementation", "spec_data_validity_propagation.html#autotoc_md14", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md15", null ]
          ] ]
        ] ],
        [ "Introduction", "spec__status_aggregator.html#autotoc_md43", null ],
        [ "High-level requirements", "spec__status_aggregator.html#autotoc_md44", [
          [ "R1.1 Automatic detection of instances", "spec__status_aggregator.html#autotoc_md45", null ],
          [ "R1.2 Priorization of status values", "spec__status_aggregator.html#autotoc_md46", null ],
          [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md47", null ]
        ] ],
        [ "Implementation", "spec__status_aggregator.html#autotoc_md48", [
          [ "Requirements", "spec__status_aggregator.html#autotoc_md49", null ],
          [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md50", null ]
        ] ],
        [ "ApplicationModule", "spec__version_propagation.html#autotoc_md51", null ],
        [ "Transfer Groups", "spec__version_propagation.html#autotoc_md52", null ],
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
"class_chimera_t_k_1_1_any_type.html",
"class_chimera_t_k_1_1_device_module.html#ab388c8a6e152379643f96c8fb945d3a3",
"class_chimera_t_k_1_1_scalar_accessor.html#a78be8599aa780f82d53eb4b57270d76b",
"class_test_transfer_group_dummy.html#a4410f3a0f799f80c0f698cfd6e2e7406",
"loggingdoc.html#loggingintro",
"struct_chimera_t_k_1_1_config_reader.html#a47db4f61e9581df45abc2910876fd1ed",
"struct_chimera_t_k_1_1_status_aggregator.html#a4a647915ca42fb4f7de4a1aed66d2334a6b37ea8f9ddd660dd78777cb2caf402d",
"struct_dummy_module.html#a49b06d4c6744fb8d99770fdae555e333",
"struct_polling_test_application.html#a65714910a770475b7d835a33087c5829",
"struct_test_app.html#a053ea51131d3752ebb3894b190f973be",
"struct_test_application_1_1_i_o.html#a81939818c2d9dee21f467b04844bdc14",
"struct_test_module.html#af46cec5b1db1f4fe98e768c226afc688",
"structtest_app_dev.html#ae81d6951e1b28b2c10b64e0b1ea99c57",
"test_logging_8cc.html#aedf8402c2e09123880996e302358cafa"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';