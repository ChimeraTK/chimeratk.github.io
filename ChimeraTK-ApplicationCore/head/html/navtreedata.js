/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-ApplicationCore", "index.html", [
    [ "Conceptual overview", "conceptual_overview.html", [
      [ "Introduction", "conceptual_overview.html#Introduction", null ],
      [ "Application module", "conceptual_overview.html#conceptualOverview_ApplicationModule", [
        [ "Process variables and accessors", "conceptual_overview.html#conceptualOverview_ProcessVariable", null ],
        [ "Push and poll transfer modes", "conceptual_overview.html#conceptualOverview_ProcessVariable_accessMode", null ]
      ] ],
      [ "The Application", "conceptual_overview.html#conceptualOverview_Application", null ],
      [ "Connections between ApplicationModules", "conceptual_overview.html#conceptualOverview_PVConnections", null ],
      [ "Module groups", "conceptual_overview.html#conceptualOverview_ModuleGroup", null ],
      [ "Device modules", "conceptual_overview.html#conceptualOverview_DeviceModule", [
        [ "Device initialisation handler", "conceptual_overview.html#conceptualOverview_DeviceModule_InitHandler", null ]
      ] ],
      [ "Periodic Triggers", "conceptual_overview.html#conceptualOverview_PeriodicTriggers", null ],
      [ "Configuration constants", "conceptual_overview.html#conceptualOverview_ConfigReader", [
        [ "The XML configuration file", "conceptual_overview.html#conceptualOverview_ConfigReader_XML", null ],
        [ "Usage", "conceptual_overview.html#conceptualOverview_ConfigReader_Usage", null ]
      ] ],
      [ "Variable groups", "conceptual_overview.html#conceptualOverview_VariableGroup", null ],
      [ "The Application model", "conceptual_overview.html#conceptualOverview_ApplicationModel", [
        [ "Model structure", "conceptual_overview.html#conceptualOverview_ApplicationModel_Structure", null ],
        [ "Usage", "conceptual_overview.html#conceptualOverview_ApplicationModel_Usage", null ]
      ] ],
      [ "Fanouts", "conceptual_overview.html#conceptualOverview_FanOuts", [
        [ "FeedingFanOut", "conceptual_overview.html#conceptualOverview_FanOuts_FeedingFanOut", null ],
        [ "ThreadedFanOut", "conceptual_overview.html#conceptualOverview_FanOuts_ThreadedFanOut", null ],
        [ "TriggerFanOut", "conceptual_overview.html#conceptualOverview_FanOuts_TriggerFanOut", null ],
        [ "ConsumingFanOut", "conceptual_overview.html#conceptualOverview_FanOuts_ConsumingFanOut", null ]
      ] ],
      [ "Initial values", "conceptual_overview.html#conceptualOverview_InitialValues", [
        [ "Initial value propagation process", "conceptual_overview.html#conceptualOverview_InitialValues_Process", null ],
        [ "Circular dependencies", "conceptual_overview.html#conceptualOverview_InitialValues_CircularDependencies", null ],
        [ "Initial data validity", "conceptual_overview.html#conceptualOverview_InitialValues_DataValidity", null ]
      ] ],
      [ "Device exception handling", "conceptual_overview.html#conceptualOverview_ExceptionHandling", [
        [ "Handling mechanism", "conceptual_overview.html#conceptualOverview_ExceptionHandling_Mechanism", null ],
        [ "Impact on ApplicationModules", "conceptual_overview.html#conceptualOverview_ExceptionHandling_ApplicationModule", null ],
        [ "Reacting to device state changes", "conceptual_overview.html#conceptualOverview_ExceptionHandling_Reacting", null ],
        [ "Reporting exceptions from user code", "conceptual_overview.html#conceptualOverview_ExceptionHandling_Report", null ]
      ] ],
      [ "Data validity propagation", "conceptual_overview.html#conceptualOverview_DataValidity", [
        [ "Propagation principle", "conceptual_overview.html#conceptualOverview_DataValidity_Principle", null ],
        [ "Important notes", "conceptual_overview.html#conceptualOverview_DataValidity_ImportantNotes", null ]
      ] ],
      [ "Control system integration", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration", [
        [ "The control system adapter", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration_Adapter", null ],
        [ "Selecting the adapter at compile time", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration_Selection", null ],
        [ "Adapter configuration", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration_Configuration", null ],
        [ "Name mapping", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration_NameMapping", null ]
      ] ],
      [ "Setting up a new project", "conceptual_overview.html#conceptualOverview_SettingUpAProject", [
        [ "Project structure", "conceptual_overview.html#conceptualOverview_SettingUpAProject_ProjectStructure", null ],
        [ "The application factory", "conceptual_overview.html#conceptualOverview_SettingUpAProject_ApplicationFactory", null ],
        [ "CMakeLists.txt walkthrough", "conceptual_overview.html#conceptualOverview_SettingUpAProject_CMakeLists", null ],
        [ "The project-template repository", "conceptual_overview.html#conceptualOverview_SettingUpAProject_ProjectTemplate", null ],
        [ "Building the project", "conceptual_overview.html#conceptualOverview_SettingUpAProject_Building", null ],
        [ "Testing", "conceptual_overview.html#conceptualOverview_SettingUpAProject_Testing", null ]
      ] ]
    ] ],
    [ "Exception Handling", "exception_handling.html", [
      [ "Introduction", "exception_handling.html#exceptionHandling_Introduction", null ],
      [ "DataValidity", "exception_handling.html#exceptionHandling_DataValidity", null ]
    ] ],
    [ "ApplicationCore 2.x -> 3.0 migration guide", "migration_guide_v2_to_v3.html", [
      [ "General", "migration_guide_v2_to_v3.html#autotoc_md12", [
        [ "Old-style servers (defineConnections still overridden)", "migration_guide_v2_to_v3.html#autotoc_md13", null ],
        [ "New-style servers (no defineConnections)", "migration_guide_v2_to_v3.html#autotoc_md14", null ]
      ] ]
    ] ],
    [ "ConfigReader Module", "configreader.html", [
      [ "Example usage", "configreader.html#usage", null ],
      [ "XML file structure", "configreader.html#xmlstructure", null ]
    ] ],
    [ "Technical specification: Exception handling for device runtime errors V1.1", "spec_execption_handling.html", [
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
    [ "Technical specification: StatusAggregator", "spec__status_aggregator.html", [
      [ "Introduction", "spec__status_aggregator.html#autotoc_md58", null ],
      [ "High-level requirements", "spec__status_aggregator.html#autotoc_md59", [
        [ "R1.1 Automatic detection of instances", "spec__status_aggregator.html#autotoc_md60", null ],
        [ "R1.2 Priorization of status values", "spec__status_aggregator.html#autotoc_md61", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md62", null ]
      ] ],
      [ "Implementation", "spec__status_aggregator.html#autotoc_md63", [
        [ "Requirements", "spec__status_aggregator.html#autotoc_md64", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md65", null ]
      ] ]
    ] ],
    [ "Example: Basic structure of an Application", "example.html", [
      [ "include", "example.html#example_include", [
        [ "include/SetpointRamp.h", "example.html#example_include_SetpointRamp_h", null ],
        [ "include/AverageCurrent.h", "example.html#example_include_AverageCurrent_h", null ],
        [ "include/Controller.h", "example.html#example_include_Controller_h", null ],
        [ "include/ExampleApp.h", "example.html#example_include_ExampleApp_h", null ]
      ] ],
      [ "src", "example.html#example_src", [
        [ "src/AutomSetpointRampation.cc", "example.html#example_src_SetpointRamp_cc", null ],
        [ "src/AverageCurrent.cc", "example.html#example_src_AverageCurrent_cc", null ],
        [ "src/AutomatiControlleron.cc", "example.html#example_src_Controller_cc", null ],
        [ "src/ExampleApp.cc", "example.html#example_src_ExampleApp_cc", null ]
      ] ],
      [ "src_factory", "example.html#example_src_factory", [
        [ ".cc src_factory/FactoryInstance.cc", "example.html#example_src_factrory_FactoryInstance", null ]
      ] ],
      [ "config", "example.html#example_config", [
        [ ".xml config/demo_example-config.xml", "example.html#example_config_demo_example-config", null ],
        [ ".xml config/demo_example-DoocsVariableConfig.xml", "example.html#example_config_demo_example-DoocsVariableConfig", null ],
        [ "config/demo_example.conf", "example.html#example_config_demo_example_conf", null ],
        [ "config/demo_example.dmap", "example.html#example_config_demo_example_dmap", null ],
        [ "config/DemoDummy.map", "example.html#example_config_DemoDummy_map", null ],
        [ "config/oven.xlmap", "example.html#example_config_oven_xlmap", null ]
      ] ]
    ] ],
    [ "Example how to write application modules in Python", "example_python_modules.html", [
      [ "Changed/added files", "example_python_modules.html#pyExample_files", [
        [ "config to load python modules", "example_python_modules.html#pyExample_config", null ],
        [ "python code", "example_python_modules.html#pyExample_code", null ]
      ] ]
    ] ],
    [ "spec_VersionPropagation", "spec__version_propagation.html", null ],
    [ "What's new in ApplicationCore 2.0", "whats_new__a_c_2_0.html", [
      [ "Initial value propagation", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value", [
        [ "Required changes to existing applications", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value_app_change", null ]
      ] ]
    ] ],
    [ "Status Monitor", "statusmonitordoc.html", null ],
    [ "Change Requests", "change_requests.html", [
      [ "Index", "change_requests.html#change_requests_index", null ],
      [ "CR-001: clarify unit and description sources", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html", [
        [ "Background and current state", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md1", [
          [ "Possible considerations of a VariableNetwork", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md2", null ]
        ] ],
        [ "Requirements", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md3", [
          [ "How module descriptions or used", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md4", null ],
          [ "How prioritization is specified", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md5", null ],
          [ "Example", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md6", null ],
          [ "Remaining ambiguities", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md7", null ],
          [ "ConfigReader", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md8", null ],
          [ "xmlGenerator output", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md9", null ]
        ] ],
        [ "Alternatives considered", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md10", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-001-clarify_units_and_descriptions.html#autotoc_md11", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
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
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_accessor_concepts_8h.html",
"_reverse_recovery_decorator_8cc.html",
"class_chimera_t_k_1_1_application.html#af1332b0343aab7ec81f4e0936d16a48b",
"class_chimera_t_k_1_1_connection_maker.html#a56274306956a844ff097c0620be4f7b3",
"class_chimera_t_k_1_1_entity_owner.html#aa856db8bf289b50c32116089e3d95e8f",
"class_chimera_t_k_1_1_feeding_fan_out.html#ab5e5a3f48536f2d4c4c399f064517ec6",
"class_chimera_t_k_1_1_model_1_1_process_variable_proxy.html#a1af028197688422fc539d2ced7291a08",
"class_chimera_t_k_1_1_network_visitor.html#aa42d6e64d94d40a672b18b671d6ba7f1",
"class_chimera_t_k_1_1_py_void_accessor.html#a1e7cb197336d310349b52c1bec5421c1",
"class_chimera_t_k_1_1_trigger_fan_out.html#a0bdec0981f40becaeaabc4d23c778118",
"class_chimera_t_k_1_1_x_m_l_generator.html#ab20f6ec2b2e2d2ce2998f47c477d26b7",
"classtest_python_read_any_group_1_1_read_any_group_mod1.html#af7b17035164c6e8d15f2980b015693fa",
"example.html#example_src_AverageCurrent_cc",
"namespace_tests_1_1test_application_p_v_model.html#a6cab9054a85119580c8ec7abf628c29a",
"namespace_tests_1_1test_status_aggregator.html#a591322d8c608e5776f4a71fc16836380",
"struct_block_init_test_app.html#a4e2316b40e53231cf8c890c4e88ada7c",
"struct_chimera_t_k_1_1_max_monitor.html",
"struct_chimera_t_k_1_1_model_1_1detail_1_1_value_holder_3_01void_01_4.html",
"struct_chimera_t_k_1_1_status_aggregator.html#a77531f83df97984df96fa8eef7fde128",
"struct_fixture.html#aa3a316b95f3cadf399e54d76e03525d2",
"struct_tests_1_1test_app_module_connections_1_1_test_module_consume.html#a5f8d19aae46e2658c311fce6aa6cca80",
"struct_tests_1_1test_circular_dependency_faulty_flags_1_1_a_a.html#a41cb2fad2fc3dc7e396ebbfdd02fdd3a",
"struct_tests_1_1test_config_reader_1_1_test_application_no_configs.html",
"struct_tests_1_1test_data_validity_propagation_1_1_test_module0.html#a87e10489bbb754d88102028fa1cd5996",
"struct_tests_1_1test_hierarchy_modifying_group_1_1_test_application_1_1_test_module.html#af87bbc76b4e7637e25ef5da102261d73",
"struct_tests_1_1test_initial_values_1_1_process_arry_dummy_application.html",
"struct_tests_1_1test_initial_values_1_1_test_fixture_with_eception_dummy.html#a28ddc2528f3ba70f54aa5c4a0691c3f7",
"struct_tests_1_1test_modules_1_1_variable_slash_scalar_app_1_1_some_module.html#a3f221cd9de8824f16cb1ab6e28098fb9",
"struct_tests_1_1test_propagate_data_fault_flag_1_1_test_application5.html#a6cf647a7c590df2804feccc13f3a92e8",
"struct_tests_1_1test_status_aggregator_1_1_test_prio_application.html#a917ffb436ca56331c1a3a03b90780037",
"struct_tests_1_1test_trigger_1_1_test_app4.html",
"test_bidirectional_variables_8cc.html#a642eb4934d998e1f5a5e1f0d4fe45b57",
"test_model_8cc.html#a969c455b9f0560bf062636fdbaa9f9b2",
"test_version_propagation_8cc.html#a975c97840842f386f20d919b49b48543"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';