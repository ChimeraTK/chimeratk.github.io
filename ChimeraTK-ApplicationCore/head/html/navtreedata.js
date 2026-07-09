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
      [ "General", "migration_guide_v2_to_v3.html#autotoc_md0", [
        [ "Old-style servers (defineConnections still overridden)", "migration_guide_v2_to_v3.html#autotoc_md1", null ],
        [ "New-style servers (no defineConnections)", "migration_guide_v2_to_v3.html#autotoc_md2", null ]
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
      [ "Introduction", "spec__status_aggregator.html#autotoc_md46", null ],
      [ "High-level requirements", "spec__status_aggregator.html#autotoc_md47", [
        [ "R1.1 Automatic detection of instances", "spec__status_aggregator.html#autotoc_md48", null ],
        [ "R1.2 Priorization of status values", "spec__status_aggregator.html#autotoc_md49", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md50", null ]
      ] ],
      [ "Implementation", "spec__status_aggregator.html#autotoc_md51", [
        [ "Requirements", "spec__status_aggregator.html#autotoc_md52", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md53", null ]
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
"_reverse_recovery_decorator_8cc_source.html",
"class_chimera_t_k_1_1_application.html#afcf25c1bf30d7c001d5ae0a593a1abbc",
"class_chimera_t_k_1_1_constant_accessor.html#a10d41aba1478e100ddaeac89f544766c",
"class_chimera_t_k_1_1_entity_owner.html#aa856db8bf289b50c32116089e3d95e8fae0ac20adce6ffee48c7151b070aa5737",
"class_chimera_t_k_1_1_internal_module.html#a0037b0e284cb90f312dadd30cf63e34d",
"class_chimera_t_k_1_1_model_1_1_process_variable_proxy.html#a4bd07f16e35057750f3f09bcdf0beb4a",
"class_chimera_t_k_1_1_pushable_stream.html#ac8206c505d8efd46cbac348a74415d30",
"class_chimera_t_k_1_1_python_application_module_trampoline.html#aea17961c679d4bb08bf16c10aee6b6c2",
"class_chimera_t_k_1_1_trigger_fan_out.html#aa7a615ce3c34ffd5e1af2c474d7fc106",
"class_example_app.html#abd542c1e6b5653650c7d297da9f0abc7",
"classtest_python_scalar_accessors_1_1_my_mod.html#a99580e293f806f93641ec83b9e8ef790",
"fixtures_8h.html",
"namespace_tests_1_1test_circular_dependency_faulty_flags.html#a8a749000de07065340af9a7c693976f1",
"namespace_tests_1_1test_user_input_validator.html#a707af7a69f9899cbdbb9afe93f22703f",
"struct_chimera_t_k_1_1_config_reader_1_1_array.html#a08cefc3657db9d3585a59243d94a43a1",
"struct_chimera_t_k_1_1_model_1_1_and_set.html#a01a83924a748f4db015ae67d4efa5320",
"struct_chimera_t_k_1_1_monitor_base.html#ae563cb3a9fc6174063731817d9f59656",
"struct_chimera_t_k_1_1_user_input_validator.html#a08800c8d5fb50b6d32c33083814b655b",
"struct_init_failure_app.html#a01270522b378a7ee892ef6ca701004ba",
"struct_tests_1_1test_application_p_v_model_1_1_test_application2.html#a7167d1004b37da927bed11816c3cf251",
"struct_tests_1_1test_circular_dependency_faulty_flags_1_1_e_e.html#ad128473c1eb1d30636d7fc48904bb60a",
"struct_tests_1_1test_config_reader_1_1_test_module_1_1_module1_1_1_sub_module_1_1_sub_sub_module.html#ac318201acb291d22adda0ce68a143f1b",
"struct_tests_1_1test_device_accessors_1_1_test_application3.html#a7730e625ce4fc67ded9cd116728f9931",
"struct_tests_1_1test_illegal_networks_1_1_test_application3.html#a043bc6df130e1a295c9ad45fc93db917",
"struct_tests_1_1test_initial_values_1_1_test6_a2_dummy_application.html#abb59a9802b5a2f1264059fa7e6c2fd46",
"struct_tests_1_1test_modules_1_1_assign_module_later_app.html#ab4a02734c22d9a58bed3cd3874b6313b",
"struct_tests_1_1test_process_variable_recovery_1_1_read_only_test_application_1_1_test_module.html",
"struct_tests_1_1test_status_aggregator_1_1_status_with_message_generator.html#a38e95a6aa977cefdbebe312fcb390211",
"struct_tests_1_1test_test_facilities_1_1_test_chanied_modules_application.html#ad6e8d2631f76e6ed5de97bd13147ad58",
"struct_tests_1_1test_user_input_validator_1_1_upstream_single_out.html#a1a554c9eeb4ce4a237c77c33cae2ab76",
"test_exception_handling_8cc.html#a0838c332e34226c59dee691c27f4a9a2",
"test_python_simple_app_8py.html#a0ab0d81903374735e019ef7af61e5516"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';