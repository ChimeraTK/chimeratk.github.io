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
      [ "Device modules", "conceptual_overview.html#conceptualOverview_DeviceModule", null ],
      [ "Periodic Triggers", "conceptual_overview.html#conceptualOverview_PeriodicTriggers", null ],
      [ "Configuration constants", "conceptual_overview.html#conceptualOverview_ConfigReader", null ],
      [ "Variable groups", "conceptual_overview.html#conceptualOverview_VariableGroup", null ],
      [ "The Application model", "conceptual_overview.html#conceptualOverview_ApplicationModel", null ],
      [ "Fanouts", "conceptual_overview.html#conceptualOverview_FanOuts", null ],
      [ "Initial values", "conceptual_overview.html#conceptualOverview_InitialValues", null ],
      [ "Device exception handling", "conceptual_overview.html#conceptualOverview_ExceptionHandling", null ],
      [ "Data validity propagation", "conceptual_overview.html#conceptualOverview_DataValidity", null ],
      [ "Control system integration", "conceptual_overview.html#conceptualOverview_ControlSystemIntegration", null ]
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
"_scalar_accessor_8h_source.html",
"class_chimera_t_k_1_1_application.html#afc90a088a6dd23059f539bc80b486c7a",
"class_chimera_t_k_1_1_constant_accessor.html#af2ffc316265c3af54206126280004418",
"class_chimera_t_k_1_1_entity_owner.html#afe28c3eba8c8820534b9827e799bac29",
"class_chimera_t_k_1_1_inversion_of_control_accessor.html",
"class_chimera_t_k_1_1_model_1_1_proxy.html#a855db53096ed1b927644f8603faa23ed",
"class_chimera_t_k_1_1_py_array_accessor.html#a818f0a6bf4a59730ce7d910bc4f74c4e",
"class_chimera_t_k_1_1_scalar_accessor.html#a30c397f9c9a396866c2b6c619812ed46",
"class_chimera_t_k_1_1_variable_network_node.html#a024d12d24ea13597b677318b8dde680f",
"class_tests_1_1test_fan_in_1_1_test_relative_sender_names_app.html#ae1889c54d94b756fa04a1f94f9cfc326",
"classtest_python_with_array_1_1_my_second_mod.html",
"namespace_chimera_t_k_1_1_model.html",
"namespace_tests_1_1test_initial_values.html#a6c7526750d31004a9ac60d0ee1f77a1d",
"oven_init_8py_source.html",
"struct_chimera_t_k_1_1_functor_fill.html#a04f75e036d17a365332d811e39aab7ea",
"struct_chimera_t_k_1_1_model_1_1_vertex_properties.html#a903fd8315e038ca9a6870b32bcb0bbbea3a287665e97a5c0c05bd536fc96bf636",
"struct_chimera_t_k_1_1_recovery_helper.html#acb690e93ebfcb0bc7d49b4ea16344637",
"struct_chimera_t_k_1_1_variable_network_node__data.html#a8d8d4cab71c80df623beb08566c48639",
"struct_tests_1_1test_app_module_connections_1_1_test_application.html#a2fd2ec9b121d62e17b6fc18dc6d6af1b",
"struct_tests_1_1test_bidirectional_variables_1_1_test_application_shutdown_issue.html#a4d2639d58c53ae25e46bc4f0e97080d1",
"struct_tests_1_1test_config_reader_1_1_test_application.html#af3fb45479fc6218b76b6427a473a4c6e",
"struct_tests_1_1test_data_validity_propagation_1_1_test_application3.html#aa4b14e6412f0297df88c7563e60ae633",
"struct_tests_1_1test_hierarchy_modifying_group_1_1_test_application_1_1_test_module.html",
"struct_tests_1_1test_initial_values_1_1_poll_dummy_application.html#ab2a269a776b0f5d34a827a9be9315912",
"struct_tests_1_1test_initial_values_1_1_test_dummy_application.html#abc02bd80b94f5c276f3b34c4895b99b5",
"struct_tests_1_1test_modules_1_1_variable_slash_scalar_app.html#a2c122d0d74bd9461fa77798c3da9a9cb",
"struct_tests_1_1test_propagate_data_fault_flag_1_1_test_application4.html#a3c5f4798862410384c0117f08a45d7d4",
"struct_tests_1_1test_status_aggregator_1_1_test_application_tags_1_1_outer_group.html#ac345883fab9be96612b6aed5e56bd57b",
"struct_tests_1_1test_trigger_1_1_test_app3.html#a87cf10da9688d661d9c81572ddcbf140",
"test_bidirectional_variables_8cc.html#a3a74fd98e3f09907174a6881e3f0ce52",
"test_model_8cc.html#aa18e56e538c98784d7b3068f6cda6ace"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';