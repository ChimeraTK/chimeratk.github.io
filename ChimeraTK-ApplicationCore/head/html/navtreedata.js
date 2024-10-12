/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
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
    [ "Technical specification: StatusAggregator", "spec__status_aggregator.html", [
      [ "Introduction", "spec__status_aggregator.html#autotoc_md46", null ],
      [ "High-level requirements", "spec__status_aggregator.html#autotoc_md47", [
        [ "A. Introduction", "spec_initial_value_propagation.html#autotoc_md19", null ],
        [ "B. Definitions", "spec_initial_value_propagation.html#autotoc_md20", null ],
        [ "C. High-level requirements", "spec_initial_value_propagation.html#autotoc_md21", [
          [ "(*) Comments", "spec_initial_value_propagation.html#autotoc_md22", null ]
        ] ],
        [ "D. Detailed requirements", "spec_initial_value_propagation.html#autotoc_md23", [
          [ "Comments", "spec_initial_value_propagation.html#autotoc_md24", null ]
        ] ],
        [ "E. Implementation", "spec_initial_value_propagation.html#autotoc_md25", [
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md26", null ],
          [ "ApplicationModule", "spec_initial_value_propagation.html#autotoc_md27", null ],
          [ "ThreadedFanOut", "spec_initial_value_propagation.html#autotoc_md28", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md29", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md30", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md31", null ],
          [ "Application", "spec_initial_value_propagation.html#autotoc_md32", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md33", null ],
          [ "ProcessArrays", "spec_initial_value_propagation.html#autotoc_md34", null ]
        ] ],
        [ "F. Known bugs [OUTDATED!!!]", "spec_initial_value_propagation.html#autotoc_md35", [
          [ "DeviceAccess interface", "spec_initial_value_propagation.html#autotoc_md36", null ],
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md37", null ],
          [ "ApplicationModule / EntityOwner", "spec_initial_value_propagation.html#autotoc_md38", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md39", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md40", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md41", null ],
          [ "VariableNetworkNode", "spec_initial_value_propagation.html#autotoc_md42", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md43", null ],
          [ "Non-memeber functions", "spec_initial_value_propagation.html#autotoc_md44", null ],
          [ "Documentation", "spec_initial_value_propagation.html#autotoc_md45", null ]
        ] ],
        [ "1. General idea", "spec_data_validity_propagation.html#autotoc_md3", [
          [ "Comments", "spec_data_validity_propagation.html#autotoc_md4", null ]
        ] ],
        [ "2. Technical implementation", "spec_data_validity_propagation.html#autotoc_md5", [
          [ "2.1 MetaDataPropagatingRegisterDecorator (*)", "spec_data_validity_propagation.html#autotoc_md6", null ],
          [ "2.2 removed", "spec_data_validity_propagation.html#autotoc_md7", null ],
          [ "2.3 ApplicationModule", "spec_data_validity_propagation.html#autotoc_md8", null ],
          [ "2.4 TriggerFanOut", "spec_data_validity_propagation.html#autotoc_md9", null ],
          [ "2.5 Interaction with exception handling", "spec_data_validity_propagation.html#autotoc_md10", null ],
          [ "2.6 Application class", "spec_data_validity_propagation.html#autotoc_md11", null ],
          [ "Comments:", "spec_data_validity_propagation.html#autotoc_md12", null ]
        ] ],
        [ "3. Implementation details", "spec_data_validity_propagation.html#autotoc_md13", null ],
        [ "4. Circular dependencies", "spec_data_validity_propagation.html#autotoc_md14", [
          [ "4.1 General behaviour", "spec_data_validity_propagation.html#autotoc_md15", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md16", null ]
          ] ],
          [ "4.3 Technical implementation", "spec_data_validity_propagation.html#autotoc_md17", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md18", null ]
          ] ]
        ] ],
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
        [ "ApplicationModule", "spec__version_propagation.html#autotoc_md54", null ],
        [ "Transfer Groups", "spec__version_propagation.html#autotoc_md55", null ],
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
"_application_8cc.html",
"_status_monitor_8h_source.html",
"class_chimera_t_k_1_1_device_manager.html#a1c744dbf1b4d19d54301dc03bed17e10",
"class_chimera_t_k_1_1_model_1_1_module_group_proxy.html",
"class_chimera_t_k_1_1_py_variable_group.html#a11e5376cecc16ce4cb0bf68cd002d831",
"classtest_python_simple_app_1_1_my_mod.html#aee49c85683f94738b8d7a01821fdd194",
"namespace_tests_1_1test_device_exception_flag_propagation.html",
"struct_chimera_t_k_1_1_array_output_r_b.html",
"struct_chimera_t_k_1_1_model_1_1_vertex_properties_1_1_root_properties.html#a5b5e030385b5ff8d4bb65273bcde4047",
"struct_chimera_t_k_1_1_variable_network_node__data.html#a4481ab32cdb405da3507936b37511c27",
"struct_tests_1_1test_application_p_v_model_1_1_test_module.html#ab617204accdf9e91d045e7d00e94c492",
"struct_tests_1_1test_config_reader_1_1_test_module_1_1_module2_1_1_another_sub_module.html",
"struct_tests_1_1test_initial_values_1_1_constant_module.html#a8753b1b7c02b8baad9c1f58fa99fde9b",
"struct_tests_1_1test_modules_1_1_test_module_1_1_another_group.html#aef6e732d33742bb8b38584870d34f4b8",
"struct_tests_1_1test_status_aggregator_1_1_test_application_tags.html#a9a3210ce01a71487416bddeec7acf858",
"test_bidirectional_variables_8cc.html#a6b2a3852db8bb19ab6909bac01859985",
"test_modules_8cc.html#a2c842fcc91b3659f330e5180c93f8a0d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';